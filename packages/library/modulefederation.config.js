const deps = require("./package.json").dependencies;

module.exports = {
  name: "library",
  exposes: {
    "./NameContextProvider": "./src/NameContextProvider.ts",
    "./SurnameContextProvider": "./src/SurnameContextProvider.ts",
    "./Button": "./src/components/Button",
    "./Logo": "./src/components/Logo",
  },
  filename: "remoteEntry.js",
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};
