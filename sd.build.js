const StyleDictionary = require("style-dictionary");

console.log("Build started...");
console.log("\n==============================================");

// Register css

StyleDictionary.registerTransform({
  name: "css/value",
  type: "value",
  transformer: function (token) {
    return `${token.value}`;
  },
});

StyleDictionary.registerTransform({
  name: "css/name",
  type: "name",
  transformer: function (token) {
    const name = token.name.replace("$", "");
    return `${name}`;
  },
});

StyleDictionary.registerTransformGroup({
  name: "css",
  transforms: ["css/value", "css/name"],
});

StyleDictionary.registerTransform({
  name: "css/name/fonts",
  type: "name",
  transformer: function (token) {
    console.log(token);
    const name = token.path.toString().replace(",", "-");
    return `${name}`;
  },
});

StyleDictionary.registerTransformGroup({
  name: "css/fonts",
  transforms: ["css/value", "css/name/fonts"],
});

// Register js colors

StyleDictionary.registerTransform({
  name: "js/value",
  type: "value",
  transformer: function (token) {
    return `${token.value}`;
  },
});

StyleDictionary.registerTransform({
  name: "js/colors/name",
  type: "name",
  transformer: function (token) {
    const name = token.name.replace("$", "");
    const splitName = name.split("-");
    let capitalizedName = "";
    splitName.forEach((string, index) => {
      if (index !== 0) {
        capitalizedName += string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
      } else {
        capitalizedName += string;
      }
    });

    return `${capitalizedName}`;
  },
});

StyleDictionary.registerTransformGroup({
  name: "js/colors",
  transforms: ["js/value", "js/colors/name"],
});

// Register js fonts

StyleDictionary.registerTransform({
  name: "js/fonts/name",
  type: "name",
  transformer: function (token) {
    const pathName = token.path.toString();
    const name = pathName.replace("$", "");
    const splitName = name.split(/-|,|@/);
    let camelCasedName = "";
    splitName.forEach((string, index) => {
      if (index !== 0) {
        camelCasedName += string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
      } else {
        camelCasedName += string;
      }
    });

    return `${camelCasedName}`;
  },
});

StyleDictionary.registerTransformGroup({
  name: "js/fonts",
  transforms: ["js/value", "js/fonts/name"],
});

// Register fontFaces

StyleDictionary.registerTransformGroup({
  name: "fontFaces",
  transforms: ["js/fonts/name"],
});

const StyleDictionaryExtended = StyleDictionary.extend(__dirname + "/configs/sd.config.js");

StyleDictionaryExtended.buildAllPlatforms();

console.log("\n==============================================");
console.log("\nBuild completed!");
