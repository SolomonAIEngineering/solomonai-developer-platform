import type { PlopTypes } from "@turbo/gen";
import fs from "fs";
import path from "path";

const rootPath = process.cwd();

interface PackageAnswers {
  name: string;
  type: "react-library" | "regular";
}

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("init", {
    description: "Generate a new package for the Monorepo",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the package?",
        validate: (input: string) => {
          if (!input.trim()) {
            return "Package name cannot be empty";
          }
          const packagePath = path.join(rootPath, "packages", input);
          if (fs.existsSync(packagePath)) {
            return "A package with this name already exists";
          }
          return true;
        },
      },
      {
        type: "list",
        name: "type",
        message: "What type of package do you want to create?",
        choices: [
          { name: "React Library", value: "react-library" },
          { name: "Regular Package", value: "regular" },
        ],
      },
    ],
    actions: (answers) => {
      const actions: PlopTypes.ActionType[] = [
        // Sanitize package name
        (answers) => {
          if (answers && typeof answers === 'object' && 'name' in answers) {
            answers.name = (answers.name as string).replace("@v1/", "").trim();
          }
          return "Config sanitized";
        },
        // Create package directory
        {
          type: "add",
          path: path.join(rootPath, "packages", "{{name}}", ".gitkeep"),
          template: "",
          force: true,
        },
        // Add all files for the selected package type
        {
          type: "addMany",
          destination: path.join(rootPath, "packages", "{{name}}"),
          base: `templates/${answers?.type === "react-library" ? "react-package" : "package"}`,
          templateFiles: `templates/${answers?.type === "react-library" ? "react-package" : "package"}/**/*`,
          globOptions: {
            dot: true,
          },
          force: true,
        },
        // Update root package.json to include new package
        {
          type: "modify",
          path: path.join(rootPath, "package.json"),
          transform: (content: string, answers: PackageAnswers) => {
            try {
              const packageJson = JSON.parse(content);
              if (!packageJson.workspaces) {
                packageJson.workspaces = [];
              }
              packageJson.workspaces.push(`packages/${answers.name}`);
              return JSON.stringify(packageJson, null, 2);
            } catch (error) {
              console.error("Error updating package.json:", error);
              return content;
            }
          },
        },
      ];

      // Add React-specific files for react-library type
      if (answers?.type === "react-library") {
        actions.push(
          // Add turbo/generators/hook-templates files
          {
            type: "addMany",
            destination: path.join(rootPath, "packages", "{{name}}", "turbo", "generators", "hook-templates"),
            base: "templates/react-package/turbo/generators/hook-templates",
            templateFiles: "templates/react-package/turbo/generators/hooktemplates/*.hbs",
            globOptions: {
              dot: true,
            },
            force: true,
          },
          // Add turbo/generators/templates files
          {
            type: "addMany",
            destination: path.join(rootPath, "packages", "{{name}}", "turbo", "generators", "templates"),
            base: "templates/react-package/turbo/generators/templates",
            templateFiles: "templates/react-package/turbo/generators/templates/*.hbs",
            globOptions: {
              dot: true,
            },
            force: true,
          }
        );
      }

      // Log the actions for debugging
      console.log("Actions to be performed:", JSON.stringify(actions, null, 2));

      return actions;
    },
  });

  plop.setActionType('postRun', (answers: unknown) => {
    const typedAnswers = answers as PackageAnswers;
    const packagePath = path.join(rootPath, "packages", typedAnswers.name);
    if (fs.existsSync(packagePath)) {
      console.log(`Package directory created: ${packagePath}`);
      const files = fs.readdirSync(packagePath);
      console.log(`Files in the package directory: ${files.join(', ')}`);
    } else {
      console.error(`Failed to create package directory: ${packagePath}`);
    }
    return "Post-run checks completed";
  });
}
