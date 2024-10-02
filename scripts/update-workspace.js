"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
const utils_1 = require("./utils");
const child_process_1 = require("child_process");
const util_1 = require("util");
const execAsync = (0, util_1.promisify)(child_process_1.exec);
// ------------------------------------------------------------------
// Parse command line arguments
const argv = (0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    .option("namespace", {
    alias: "n",
    type: "string",
    demandOption: false,
    description: "The new namespace for the packages",
})
    .option("ver", {
    alias: "v",
    type: "string",
    demandOption: false,
    description: "The new version for the packages",
})
    .option("author", {
    alias: "a",
    type: "string",
    demandOption: false,
    description: "The new author of the packages",
})
    .option("license", {
    alias: "l",
    type: "string",
    demandOption: false,
    description: "The new license for the packages",
})
    .option("exclude", {
    alias: "e",
    type: "array",
    demandOption: false,
    description: "Exclude packages from the update",
})
    .option("include-root", {
    alias: "ir",
    type: "boolean",
    demandOption: false,
    description: "Include the root package.json",
})
    .help("h")
    .alias("h", "help")
    .usage("Usage: $0 [options]")
    .example("$0 -n @newnamespace -v 1.0.0", "Update namespace and version")
    .epilog("For more information, visit https://github.com/your-repo")
    .parse();
const newLicense = argv.license;
const newAuthor = argv.author;
const newVersion = argv.ver;
const newNamespace = argv.namespace;
const excludePackages = argv.exclude ?? [];
const includeRoot = argv["include-root"];
// Record to store updated package names
const updatedPackages = {};
const ignoredFolders = [
    "node_modules",
    ".next",
    ".turbo",
    "dist",
    "build",
    ".git",
];
const ignoredFiles = ["package.json", "bun.lockb"];
// ------------------------------------------------------------------
/**
 * Function to update the version in package.json files
 * @param packageJson the parsed package.json
 * @returns updated package.json
 */
function updateVersion(packageJson) {
    // Skip updating excluded packages
    if (!newVersion ||
        (packageJson.name && excludePackages.includes(packageJson.name))) {
        return packageJson;
    }
    packageJson.version = newVersion;
    console.log(`Updated version of ${String(packageJson.name)}`);
    return packageJson;
}
// ------------------------------------------------------------------
/**
 * Function to update the name in package.json files
 * @param packageJson the parsed package.json
 * @param fullPath the full path to the package.json file
 * @returns updated package.json
 */
function updatePackageName(packageJson, fullPath) {
    if (!newNamespace) {
        return packageJson;
    }
    if (packageJson.name) {
        // Skip updating excluded packages
        if (excludePackages.includes(packageJson.name)) {
            return packageJson;
        }
        // Update the name
        const parts = packageJson.name.split("/");
        if (parts.length === 2) {
            // Update the name
            parts[0] = newNamespace;
            const newPackageName = parts.join("/");
            updatedPackages[packageJson.name] = newPackageName;
            packageJson.name = newPackageName;
            console.log(`Updated name in ${fullPath} to ${packageJson.name}`);
        }
        else if (fullPath === process.cwd()) {
            // Update the root package.json name
            packageJson.name = newNamespace.replace("@", "");
            console.log(`Updated name in ${fullPath} to ${packageJson.name}`);
        }
    }
    return packageJson;
}
// ------------------------------------------------------------------
/**
 * Function to update the author in package.json files
 * @param packageJson the parsed package.json
 * @returns updated package.json
 */
function updateAuthor(packageJson) {
    if (!newAuthor) {
        return packageJson;
    }
    // Skip updating excluded packages
    if (packageJson.name && excludePackages.includes(packageJson.name)) {
        return packageJson;
    }
    packageJson.author = newAuthor;
    console.log(`Updated author of ${String(packageJson.name)}`);
    return packageJson;
}
// ------------------------------------------------------------------
/**
 * Function to update the license in package.json files
 * @param packageJson the parsed package.json
 * @returns updated package.json
 */
function updateLicense(packageJson) {
    if (!newLicense) {
        return packageJson;
    }
    // Skip updating excluded packages
    if (packageJson.name && excludePackages.includes(packageJson.name)) {
        return packageJson;
    }
    packageJson.license = newLicense;
    console.log(`Updated license for ${String(packageJson.name)}`);
    return packageJson;
}
// ------------------------------------------------------------------
/**
 * Function to update the package.json details
 * @param packageJson the parsed package.json
 * @param fullPath the full path to the package.json file
 * @returns updated package.json
 */
function updatePackageJsonDetails(packageJson, fullPath) {
    packageJson = updatePackageName(packageJson, fullPath);
    packageJson = updateVersion(packageJson);
    packageJson = updateAuthor(packageJson);
    packageJson = updateLicense(packageJson);
    return packageJson;
}
// ------------------------------------------------------------------
/**
 * Update the dependencies in all package.json files
 * @param packageJson the parsed package.json
 * @returns updated package.json
 */
function updateDependencies(packageJson) {
    packageJson.dependencies = renameDependencies(packageJson.dependencies);
    packageJson.devDependencies = renameDependencies(packageJson.devDependencies);
    return packageJson;
}
// ------------------------------------------------------------------
/**
 * Function to rename dependencies in a package.json
 * @param dependencies the dependencies to update
 * @returns updated dependencies
 */
function renameDependencies(dependencies) {
    if (!dependencies) {
        return {};
    }
    /* eslint-disable security/detect-object-injection */
    for (const [name, version] of Object.entries(dependencies)) {
        const dependency = updatedPackages[name];
        if (dependency && dependency !== name) {
            dependencies[dependency] = version;
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete dependencies[name];
            console.log(`Updated dependency from ${name} to ${dependency}`);
        }
    }
    /* eslint-enable security/detect-object-injection */
    return dependencies;
}
// ------------------------------------------------------------------
/**
 * Function to find and replace package names in all files
 */
async function findAndReplacePackageNames() {
    if (!newNamespace) {
        return;
    }
    console.log("🗂️ Finding and replacing package names in all files...");
    await (0, utils_1.traverseDirectory)(process.cwd(), async (fullPath) => {
        // for each updated package, make sure the file is updated where they are referenced
        await (0, utils_1.replaceInFile)(fullPath, updatedPackages, ignoredFiles);
    }, ignoredFolders);
    await (0, utils_1.updateNamespaceInPrettierConfig)(process.cwd(), newNamespace);
}
// ------------------------------------------------------------------
// Start updating from the current directory
void (0, utils_1.updateWorkspacePackages)(process.cwd(), updatePackageJsonDetails, includeRoot);
if (newNamespace) {
    // Update dependencies
    console.log("🔄 Updating dependencies...");
    (0, utils_1.updateWorkspacePackages)(process.cwd(), updateDependencies, includeRoot)
        .then(() => {
        // Find and replace package names in all files
        return findAndReplacePackageNames();
    })
        .then(() => {
        // Run final commands
        return execAsync("bun format && bun turbo clean && bun install");
    })
        .then(() => {
        console.log("🎉 Done! Workspace namespaces have successfully been updated. You may wish to reload your IDE, to remove any errors.");
    })
        .catch((error) => {
        console.error("Error updating workspace or running final commands:", error.message);
    });
}
