module.exports = {
  "**/*.{js,jsx,ts,tsx}": (filenames) => [
    `bunx eslint --fix ${filenames
      .map((filename) => `"${filename}"`)
      .join(" ")} --config .eslintrc.js"`,
  ],
  "**/*.(md|json)": (filenames) =>
    `bunx prettier --write ${filenames
      .map((filename) => `"${filename}"`)
      .join(" ")}"`,
  "src/translations/*.(json)": (filenames) => [
    `bunx eslint --fix ${filenames
      .map((filename) => `"${filename}"`)
      .join(" ")} --config .eslintrc.js"`,
  ],
};
