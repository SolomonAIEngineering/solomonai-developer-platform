"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = generator;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const rootPath = process.cwd();
function generator(plop) {
    plop.setGenerator("init", {
        description: "Generate a new package for the Monorepo",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "What is the name of the package?",
                validate: (input) => {
                    if (!input.trim()) {
                        return "Package name cannot be empty";
                    }
                    const packagePath = path_1.default.join(rootPath, "packages", input);
                    if (fs_1.default.existsSync(packagePath)) {
                        return "A package with this name already exists";
                    }
                    return true;
                },
            },
        ],
        actions: [
            // Sanitize package name
            (answers) => {
                answers.name = answers.name.replace("@v1/", "").trim();
                return "Config sanitized";
            },
            // Create package.json
            {
                type: "add",
                path: path_1.default.join(rootPath, "packages", "{{ name }}", "package.json"),
                templateFile: "templates/package.json.hbs",
            },
            // Create tsconfig.json
            {
                type: "add",
                path: path_1.default.join(rootPath, "packages", "{{ name }}", "tsconfig.json"),
                templateFile: "templates/tsconfig.json.hbs",
            },
            // Create index.ts
            {
                type: "add",
                path: path_1.default.join(rootPath, "packages", "{{ name }}", "index.ts"),
                template: "export * from './src';",
            },
            // Create src/index.ts
            {
                type: "add",
                path: path_1.default.join(rootPath, "packages", "{{ name }}", "src", "index.ts"),
                template: "export const name = '{{ name }}';",
            },
            // Update root package.json to include new package
            {
                type: "modify",
                path: path_1.default.join(rootPath, "package.json"),
                transform: (content, answers) => {
                    const packageJson = JSON.parse(content);
                    if (!packageJson.workspaces) {
                        packageJson.workspaces = [];
                    }
                    packageJson.workspaces.push(`packages/${answers.name}`);
                    return JSON.stringify(packageJson, null, 2);
                },
            },
        ],
    });
}
