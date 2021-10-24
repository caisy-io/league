const StyleDictionary = require("style-dictionary");
const kebabCase = require("lodash/kebabCase");
const camelCase = require("lodash/camelCase");

const defaultValues = ["var(--fontFamilies-inter)", "var(--letterSpacing-0)", "var(--paragraphSpacing-0)"];

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
    const camelCasedName = camelCase(token.name);

    return `${camelCasedName}`;
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
    const camelCasedName = camelCase(pathName);

    return `${camelCasedName}`;
  },
});

StyleDictionary.registerTransformGroup({
  name: "js/fonts",
  transforms: ["js/value", "js/fonts/name"],
});

// Register fontFaces

StyleDictionary.registerFormat({
  name: "styledComponents",
  formatter: function ({ dictionary }) {
    let fonts = 'import { css } from "styled-components" \n\n';
    for (extVariable in dictionary.properties) {
      for (variable in dictionary.properties[extVariable]) {
        const name = extVariable + variable;
        let camelCasedName = camelCase(name);

        fonts = fonts + "export const " + camelCasedName + " = css`\n";
        for (property in dictionary.properties[extVariable][variable]) {
          const value = `var(${dictionary.properties[extVariable][variable][property].value
            .replace("$", "--")
            .replace(".", "-")})`;
          console.log(value);
          if (!defaultValues.includes(value)) fonts = fonts + `  ${kebabCase(property)}: ${value};\n`;
        }
        fonts = fonts + "`;\n\n";
      }
    }
    return fonts;
  },
});

const StyleDictionaryExtended = StyleDictionary.extend(__dirname + "/configs/sd.config.js");

StyleDictionaryExtended.buildAllPlatforms();

console.log("\n==============================================");
console.log("\nBuild completed!");
