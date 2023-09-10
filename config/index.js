require("dotenv").config();

function getConfig(key = "") {
  const vars = process.env;

  if (key) {
    const parsedKey = `CONFIG_${key.toUpperCase()}`;
    return vars[parsedKey];
  }

  let config = {};
  Object.keys(vars).forEach((k) => {
    if (k.startsWith("CONFIG_")) {
      config[k.replace("CONFIG_", "")] = vars[k];
    }
  });

  return config;
}

module.exports = {
  getConfig,
};
