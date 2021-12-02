const StyleDictionary = require("style-dictionary");
const kebabCase = require("lodash/kebabCase");
const camelCase = require("lodash/camelCase");
const startCase = require("lodash/startCase");

const defaultValues = ["var(--font-families-inter)", "var(--letter-spacing-0)", "var(--paragraph-spacing-0)"];

const ACCEPTED_FONT_WEIGHTS = [
  "Thin",
  "Extra Light",
  "Light",
  "Regular",
  "Medium",
  "Semi Bold",
  "Bold",
  "Extra Bold",
  "Black",
  "Extra Black",
];

const FONT_WEIGHTS = {
  Thin: 100,
  "Extra Light": 200,
  Light: 300,
  Regular: 400,
  Medium: 500,
  "Semi Bold": 600,
  Bold: 700,
  "Extra Bold": 800,
  Black: 900,
  "Extra Black": 950,
};

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
      if (token.type === "fontSizes" || token.type === "lineHeights" || token.type === "fontWeights") {
        if ((token.type === "fontSizes" || token.type === "lineHeights") && parseInt(token.value) !== 0) {
          value = `${parseInt(value) / 16}rem`;
          const name = kebabCase(`${token.path[0]}-${token.name}`);
          fonts += `    --${name}: ${value};\n`;
        } else if (token.type === "fontWeights") {
          if (!ACCEPTED_FONT_WEIGHTS.includes(value)) {
            console.warn(`Font weight ${value} is not supported, expecting: ${ACCEPTED_FONT_WEIGHTS.toString()}`);
          } else {
            value = `${FONT_WEIGHTS[value]}`;
            const name = kebabCase(`${token.path[0]}-${token.name}`);
            fonts += `    --${name}: ${value};\n`;
          }
        }
      } else {
        const name = kebabCase(`${token.path[0]}-${token.name}`);
        fonts += `    --${name}: ${value};\n`;
      }
    });
    fonts = fonts + "  }\n";
    fonts = fonts + "`;\n";
    return fonts;
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
      // to prevent duplicates
      if(!colors.includes(`--${name}: ${value};`)){
        if(`${value}` === 'undefined'){
          console.log(`undefined token `, token);
        }
        colors += `    --${name}: ${value};\n`;
      }

      for (property in token.original) {
        if (property !== "value" && property !== "type") {
          const value = token.original[property].value;
          const innerName = `${name}-${property}`;
          // to prevent duplicates
          if(!colors.includes(`--${innerName}: ${value};`)){
            if(`${value}` === 'undefined'){
              console.log(`      undefined         token.original[property]
`,               token.original[property]
);
            }
            colors += `    --${innerName}: ${value};\n`;
          }
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
