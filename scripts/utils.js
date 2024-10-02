"use strict";
/* eslint-disable security/detect-non-literal-fs-filename */
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRootPackageJson = getRootPackageJson;
exports.getWorkspacePackagePaths = getWorkspacePackagePaths;
exports.getPackageNamesFromPaths = getPackageNamesFromPaths;
exports.getWorkspacePackageNames = getWorkspacePackageNames;
exports.updateWorkspacePackages = updateWorkspacePackages;
exports.replaceInFile = replaceInFile;
exports.traverseDirectory = traverseDirectory;
exports.updateNamespaceInPrettierConfig = updateNamespaceInPrettierConfig;
const fs = __importStar(require("fs"));
const fsPromise = __importStar(require("fs/promises"));
const path = __importStar(require("path"));
// ------------------------------------------------------------------
/**
 * Function to read and parse the root package.json
 * @param cwd the current working directory
 * @returns the root package.json in the workspace.
 */
function getRootPackageJson(cwd) {
  const rootPackageJsonPath = path.resolve(cwd, "package.json");
  const rootPackageJson = JSON.parse(
    fs.readFileSync(rootPackageJsonPath, "utf-8"),
  );
  return rootPackageJson;
}
// ------------------------------------------------------------------
/**
 * Function to get all workspace package paths.
 * @param workspaces the workspaces defined in the root package.json.
 * @returns an array of all workspace package paths.
 */
function getWorkspacePackagePaths(workspaces) {
  const workspacePackagePaths = [];
  workspaces.forEach((workspacePattern) => {
    const workspaceDirs = workspacePattern.replace(/\/\*$/, "");
    const absolutePath = path.resolve(process.cwd(), workspaceDirs);
    const packages = fs
      .readdirSync(absolutePath)
      .map((pkgDir) => path.join(workspaceDirs, pkgDir))
      .filter((pkgPath) => fs.existsSync(path.join(pkgPath, "package.json"))); // Filter only directories with package.json
    workspacePackagePaths.push(...packages);
  });
  return workspacePackagePaths;
}
// ------------------------------------------------------------------
/**
 * Function to get package names from package.json files
 * @param packagePaths an array of package paths
 * @returns an array of package names
 */
function getPackageNamesFromPaths(packagePaths) {
  const packageNames = packagePaths
    .map((pkgPath) => {
      const packageJsonPath = path.join(pkgPath, "package.json");
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
      return packageJson.name;
    })
    .filter((name) => !!name); // Filter out undefined names
  return packageNames;
}
// ------------------------------------------------------------------
/**
 * Function to get all workspace package names
 * @param cwd the current working directory
 * @returns an array of all workspace package names
 */
function getWorkspacePackageNames(cwd) {
  const rootPackageJson = getRootPackageJson(cwd);
  if (!rootPackageJson.workspaces) {
    throw new Error("No workspaces defined in the root package.json");
  }
  const workspacePackagePaths = getWorkspacePackagePaths(
    rootPackageJson.workspaces,
  );
  const packageNames = getPackageNamesFromPaths(workspacePackagePaths);
  return [
    ...packageNames,
    ...(rootPackageJson.name ? [rootPackageJson.name] : []),
  ];
}
// ------------------------------------------------------------------
/**
 * Function to update all package.json files in the workspace
 * @param cwd the current working directory
 * @param update the function to update the package.json
 * @param includeRoot whether to include the root package.json
 */
async function updateWorkspacePackages(cwd, update, includeRoot = false) {
  const rootPackageJson = getRootPackageJson(cwd);
  if (!rootPackageJson.workspaces) {
    throw new Error("No workspaces defined in the root package.json");
  }
  const workspacePackagePaths = getWorkspacePackagePaths(
    rootPackageJson.workspaces,
  );
  if (includeRoot) {
    workspacePackagePaths.push(cwd);
  }
  await Promise.all(
    workspacePackagePaths.map(async (pkgPath) => {
      const packageJsonPath = path.join(pkgPath, "package.json");
      const packageJsonContent = await fsPromise.readFile(
        packageJsonPath,
        "utf-8",
      );
      const packageJson = JSON.parse(packageJsonContent);
      const updatedPackageJson = await update(packageJson, pkgPath);
      await fsPromise.writeFile(
        packageJsonPath,
        JSON.stringify(updatedPackageJson, null, 2) + "\n",
      );
    }),
  );
}
// ------------------------------------------------------------------
/**
 * Function to replace a string in a file
 * @param filePath path to the file
 * @param searchReplace an object with search and replace strings
 * @param ignoredFiles an array of file names to ignore
 */
async function replaceInFile(filePath, searchReplace, ignoredFiles = []) {
  if (ignoredFiles.includes(path.basename(filePath))) {
    return;
  }
  try {
    let data = await fsPromise.readFile(filePath, "utf8");
    for (const [search, replace] of Object.entries(searchReplace)) {
      // eslint-disable-next-line security/detect-non-literal-regexp
      const regex = new RegExp(search, "g");
      data = data.replace(regex, replace);
    }
    await fsPromise.writeFile(filePath, data, "utf8");
    console.log(`Successfully updated ${filePath}`);
  } catch (err) {
    console.error(`Error processing file ${filePath}:`, err);
  }
}
// ------------------------------------------------------------------
/**
 * Function to traverse a directory and call a callback on each file
 * @param directory the directory to traverse
 * @param callback a function to call on each file
 * @param ignoredFolders an array of folder names to ignore
 */
async function traverseDirectory(directory, callback, ignoredFolders = []) {
  try {
    const files = await fsPromise.readdir(directory);
    for (const file of files) {
      const fullPath = path.join(directory, file);
      const stats = await fsPromise.stat(fullPath);
      if (stats.isDirectory()) {
        if (!ignoredFolders.includes(file)) {
          await traverseDirectory(fullPath, callback, ignoredFolders);
        }
      } else if (stats.isFile()) {
        await callback(fullPath);
      }
    }
  } catch (err) {
    console.error(`Error processing directory ${directory}:`, err);
  }
}
// ------------------------------------------------------------------
/**
 * Function to update the prettier.config.js file
 * @param cwd the current working directory
 * @param newNamespace the new namespace to replace
 */
async function updateNamespaceInPrettierConfig(cwd, newNamespace) {
  const filePath = path.join(cwd, "prettier.config.js");
  try {
    const data = await fsPromise.readFile(filePath, "utf8");
    // Extract importOrder array content
    const importOrderStart = data.indexOf("importOrder: [");
    const importOrderEnd = data.indexOf("],", importOrderStart);
    if (importOrderStart === -1 || importOrderEnd === -1) {
      console.error("importOrder array not found in file");
      return;
    }
    const beforeImportOrder = data.substring(0, importOrderStart);
    const importOrderContent = data.substring(
      importOrderStart,
      importOrderEnd + 2,
    ); // Include '],'
    const afterImportOrder = data.substring(importOrderEnd + 2);
    const searchPattern = /'\^@\w+\/\(\.\*\)\$'/g;
    // Replace within importOrder array content
    const updatedImportOrderContent = importOrderContent.replace(
      searchPattern,
      (match) => {
        return match.replace(/@\w+\//, `${newNamespace}/`);
      },
    );
    // Reconstruct the file content
    const updatedData =
      beforeImportOrder + updatedImportOrderContent + afterImportOrder;
    await fsPromise.writeFile(filePath, updatedData, "utf8");
    console.log(`Successfully updated ${filePath}`);
  } catch (err) {
    console.error(`Error processing file ${filePath}:`, err);
  }
}
/* eslint-enable security/detect-non-literal-fs-filename */
