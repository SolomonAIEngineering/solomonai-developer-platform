# Scripts

This folder contains utility scripts for managing the workspace.

## update-workspace.ts

This script updates the workspace packages, including their namespace, version, author, and license. It also updates dependencies and replaces package names in all files.

### Usage
```bash
bun run scripts/update-workspace.ts [options]
```

### Options

- `-n, --namespace <namespace>`: The new namespace for the packages
- `-v, --ver <version>`: The new version for the packages
- `-a, --author <author>`: The new author of the packages
- `-l, --license <license>`: The new license for the packages
- `-e, --exclude <packages...>`: Exclude packages from the update
- `--include-root`: Include the root package.json
- `-h, --help`: Show help

### Examples

Update namespace and version:
```bash
bun run scripts/update-workspace.ts -n @newnamespace -v 1.0.0
```
Update author and license:
```bash
bun run scripts/update-workspace.ts -a "New Author" -l "MIT"
```

Exclude specific packages:
```bash
bun run scripts/update-workspace.ts -n @newnamespace -e package1 package2
```

### Notes

- The script will ignore certain folders (node_modules, .next, .turbo, dist, build, .git) and files (package.json, bun.lockb) during the update process.
- After updating the workspace, the script will run `bun format`, `bun turbo clean`, and `bun install` to ensure everything is properly formatted and installed.
- You may need to reload your IDE after running this script to clear any lingering errors.

For more information, refer to the script source code or contact the repository maintainers
