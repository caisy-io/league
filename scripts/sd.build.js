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

const enforceHexString = (s) => {
  if (s === "white") {
    return "#ffffff";
  } else {
    return s;
  }
};

// Register fontFaces

StyleDictionary.registerFormat({
  name: "styledComponents",
  formatter: function ({ dictionary }) {
    let fonts = 'import { css } from "styled-components";\n\n';
    const list = [];
    for (extVariable in dictionary.properties) {
      for (variable in dictionary.properties[extVariable]) {
          list.push({extVariable, variable});
      }
    }

    list.sort((a, b) => {
      let nameA = startCase(camelCase(a.extVariable + a.variable)).replace(/ /g, "");
      let nameB = startCase(camelCase(b.extVariable + b.variable)).replace(/ /g, "");
      if (nameA < nameB) //sort string ascending
      return -1;
     if (nameA > nameB)
      return 1;
     return 0;
    })
    .map(({extVariable, variable}) => {
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
    })
    return fonts;
  },
});

StyleDictionary.registerFormat({
  name: "styledFonts",
  formatter: function ({ dictionary }) {
    let fonts = 'import { css } from "styled-components";\n\n';
    fonts += "export const CSSFonts = css`\n";
    fonts += "  :root {\n";
    dictionary.allTokens.sort((a, b) => {
      const nameA = kebabCase(`${a.name}`)
      const nameB = kebabCase(`${b.name}`)
      if (nameA < nameB) //sort string ascending
      return -1;
     if (nameA > nameB)
      return 1;
     return 0;
    }).forEach((token) => {
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
    dictionary.allTokens.sort((a, b) => {
      const nameA = kebabCase(`${a.name}`)
      const nameB = kebabCase(`${b.name}`)
      if (nameA < nameB) //sort string ascending
      return -1;
     if (nameA > nameB)
      return 1;
     return 0;
    }).forEach((token) => {
      const value = `${token.value["x"]}px ${token.value["y"]}px ${token.value["blur"]}px ${token.value["spread"]}px ${token.value["color"]}`;

      const name = kebabCase(`${token.name}`);
      boxShadows += `    --box-shadow-${name}: ${value};\n`;
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

    dictionary.allTokens.sort((a, b) => {
      const nameA = kebabCase(`${a.name}`)
      const nameB = kebabCase(`${b.name}`)
      if (nameA < nameB) //sort string ascending
      return -1;
     if (nameA > nameB)
      return 1;
     return 0;
    }).forEach((token) => {
      console.log(token);
      const value = enforceHexString(token.value);
      const name = kebabCase(`${token.name}`);
      // to prevent duplicates
      if (!colors.includes(`--${name}: ${value};`)) {
        colors += `    --${name}: ${value};\n`;
      }

      for (property in token.original) {
        if (property !== "value" && property !== "type") {
          let value = enforceHexString(token.original[property].value);
          const innerName = `${name}-${property}`;
          // to prevent duplicates
          if (!colors.includes(`--${innerName}: ${value};`)) {
            if (`${value}` === "undefined") {
              value = enforceHexString(token.original[property]);
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
