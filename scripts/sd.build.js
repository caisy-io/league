const StyleDictionary = require("style-dictionary");
const kebabCase = require("lodash/kebabCase");
const camelCase = require("lodash/camelCase");
const startCase = require("lodash/startCase");

const defaultValues = ["var(--fontFamilies-inter)", "var(--letterSpacing-0)", "var(--paragraphSpacing-0)"];

console.log("Build started...");
console.log("\n==============================================");

// Register fontFaces

StyleDictionary.registerFormat({
  name: "styledComponents",
  formatter: function ({ dictionary }) {
    let fonts = 'import { css } from "styled-components" \n\n';
    for (extVariable in dictionary.properties) {
      for (variable in dictionary.properties[extVariable]) {
        const name = extVariable + variable;
        let pascalCasedName = startCase(camelCase(name)).replace(/ /g, "");

        fonts = fonts + "export const CSS" + pascalCasedName + " = css`\n";
        for (property in dictionary.properties[extVariable][variable]) {
          const value = `var(--${kebabCase(dictionary.properties[extVariable][variable][property].value)
            .replace("$", "--")
            .replace(".", "-")})`;
          if (!defaultValues.includes(value)) fonts = fonts + `  ${kebabCase(property)}: ${value};\n`;
        }
        fonts = fonts + "`;\n\n";
      }
    }
    return fonts;
  },
});

StyleDictionary.registerFormat({
  name: "styledFonts",
  formatter: function ({ dictionary }) {
    let fonts = 'import { css } from "styled-components" \n\n';
    fonts += "export const CSSFonts = css`\n";
    fonts += "  :root {\n";
    dictionary.allTokens.forEach((token) => {
      let value = token.value;
      if ((token.type === "fontSizes" || token.type === "lineHeights") && parseInt(token.value) !== 0) {
        value = `${parseInt(value) / 16}rem`;
      }
      const name = kebabCase(`${token.path[0]}-${token.name}`);
      fonts += `    --${name}: ${value};\n`;
    });
    fonts = fonts + "  }\n";
    fonts = fonts + "`;\n";
    return fonts;
  },
});

StyleDictionary.registerFormat({
  name: "styledBoxShadows",
  formatter: function ({ dictionary }) {
    let boxShadows = 'import { css } from "styled-components" \n\n';
    boxShadows += "export const CSSBoxShadows = css`\n";
    boxShadows += "  :root {\n";
    dictionary.allTokens.forEach((token) => {
      const value = `${token.value["x"]} ${token.value["y"]} ${token.value["blur"]} ${token.value["spread"]} ${token.value["color"]}`;

      const name = kebabCase(`${token.name}`);
      boxShadows += `    --box-shadow-${name}: ${value}\n`;
    });
    boxShadows = boxShadows + "  }\n";
    boxShadows = boxShadows + "`;\n";
    return boxShadows;
  },
});

StyleDictionary.registerFormat({
  name: "styledColors",
  formatter: function ({ dictionary }) {
    let colors = 'import { css } from "styled-components";\n\n';
    colors += "export const CSSColors = css`\n";
    colors += "  :root {\n";

    dictionary.allTokens.forEach((token) => {
      console.log(token);
      const value = token.value;
      const name = kebabCase(`${token.name}`);
      colors += `    --${name}: ${value}\n`;

      for (property in token.original) {
        if (property !== "value" && property !== "type") {
          const value = token.original[property].value;
          const innerName = `${name}-${property}`;
          colors += `    --${innerName}: ${value}\n`;
        }
      }
    });

    colors += "  }\n";
    colors += "`;\n";
    return colors;
  },
});

const StyleDictionaryExtended = StyleDictionary.extend(__dirname + "/../configs/sd.config.js");

StyleDictionaryExtended.buildAllPlatforms();

console.log("\n==============================================");
console.log("\nBuild completed!");
