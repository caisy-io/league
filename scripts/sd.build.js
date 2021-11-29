const StyleDictionary = require("style-dictionary");
const kebabCase = require("lodash/kebabCase");
const camelCase = require("lodash/camelCase");
const startCase = require("lodash/startCase");

const defaultValues = ["var(--font-families-inter)", "var(--letter-spacing-0)", "var(--paragraph-spacing-0)"];

console.log("Build started...");
console.log("\n==============================================");

// Register fontFaces

StyleDictionary.registerFormat({
  name: "styledComponents",
  formatter: function ({ dictionary }) {
    let fonts = 'import { css } from "styled-components";\n\n';
    for (extVariable in dictionary.properties) {
      for (variable in dictionary.properties[extVariable]) {
        const name = extVariable + variable;
        let pascalCasedName = startCase(camelCase(name)).replace(/ /g, "");

        fonts = fonts + "export const CSS" + pascalCasedName + " = css`\n";
        for (property in dictionary.properties[extVariable][variable].value) {
          const value = `var(--${kebabCase(dictionary.properties[extVariable][variable]["value"][property])
            .replace("$", "--")
            .replace(".", "-")})`;
          if (!defaultValues.includes(value)) fonts = fonts + `  ${kebabCase(property)}: ${value};\n`;
        }
        fonts = fonts + "`;\n";
      }
    }
    return fonts;
  },
});

StyleDictionary.registerFormat({
  name: "styledFonts",
  formatter: function ({ dictionary }) {
    let fonts = 'import { css } from "styled-components";\n\n';
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
  name: "styledComponentsFlat",
  formatter: function ({ dictionary, ...rest }) {
    let output = 'import { css } from "styled-components";\n\n';
    output = output + "export const " + `${rest?.platform?.name || "CSSVars"}` + " = css`\n:root {\n";
    const set = new Set();

    const addToSet = (obj) => {
      if (typeof obj?.name === "string" && obj.name?.includes("$") && obj?.value) {
        set.add({ name: obj?.name.replace(/\$/, "--"), value: obj.value });
      }
    };

    for (layer1 in dictionary.properties) {
      addToSet(dictionary.properties[layer1]);
      for (layer2 in dictionary.properties[layer1]) {
        addToSet(dictionary.properties[layer1][layer2]);
        for (layer3 in dictionary.properties[layer1][layer2]) {
          addToSet(dictionary.properties[layer1][layer2][layer3]);
          for (layer4 in dictionary.properties[layer1][layer2][layer3]) {
            addToSet(dictionary.properties[layer1][layer2][layer3][layer4]);
          }
        }
      }
    }

    set.forEach((item) => {
      output = output + `${item.name}: ${item.value};\n`;
    });

    output = output + "}`;";
    return output;
  },
});

StyleDictionary.registerFormat({
  name: "styledBoxShadows",
  formatter: function ({ dictionary }) {
    let boxShadows = 'import { css } from "styled-components";\n\n';
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

const StyleDictionaryExtended = StyleDictionary.extend(__dirname + "/../configs/sd.config.js");

StyleDictionaryExtended.buildAllPlatforms();

console.log("\n==============================================");
console.log("\nBuild completed!");
