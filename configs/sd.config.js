module.exports = {
  source: [
    "./src/constants/styles/design-tokens/input/colors.json",
    "./src/constants/styles/design-tokens/input/fonts.json",
    "./src/constants/styles/design-tokens/input/styledFonts.json",
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
    cssFonts: {
      transformGroup: "css/fonts",
      buildPath: "./src/constants/styles/design-tokens/fonts/",
      files: [
        {
          format: "css/variables",
          destination: "fonts.css",
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
          destination: "fonts.tsx",
          format: "styledComponents",
          filter: {
            filePath: "./src/constants/styles/design-tokens/input/styledFonts.json",
          },
        },
      ],
    },
  },
};
