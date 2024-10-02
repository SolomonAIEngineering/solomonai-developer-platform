// give me a function to capitalize the first letter of a string
const capitalize = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export { capitalize };
