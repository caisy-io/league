module.exports = {
  source: [
    "./src/constants/styles/design-tokens/input/colors.json",
    "./src/constants/styles/design-tokens/input/fonts.json",
    "./src/constants/styles/design-tokens/input/styledFonts.json",
    "./src/constants/styles/design-tokens/input/box-shadows.json",
  ],
  platforms: {
    styledColors: {
      name: "CSSColors",
      buildPath: "./src/constants/styles/design-tokens/colors/",
      files: [
        {
          destination: "CSSColors.tsx",
          format: "styledComponentsFlat",
          filter: {
            type: "color",
          },
        },
      ],
    },
    styledFonts: {
      buildPath: "./src/constants/styles/design-tokens/fonts/",
      files: [
        {
          format: "styledFonts",
          destination: "CSSFonts.tsx",
          filter: {
            filePath: "./src/constants/styles/design-tokens/input/fonts.json",
          },
        },
      ],
    },
    fontFaces: {
      buildPath: "./src/constants/styles/design-tokens/fonts/",
      files: [
        {
          destination: "CSSTypographies.tsx",
          format: "styledComponents",
          filter: {
            filePath: "./src/constants/styles/design-tokens/input/styledFonts.json",
          },
        },
      ],
    },
    boxShadows: {
      buildPath: "./src/constants/styles/design-tokens/box-shadows/",
      files: [
        {
          destination: "CSSBoxShadows.tsx",
          format: "styledBoxShadows",
          filter: {
            filePath: "./src/constants/styles/design-tokens/input/box-shadows.json",
          },
        },
      ],
    },
  },
};
