module.exports = {
  source: ["./src/constants/styles/design-tokens/new-tokens.json"],
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
          filter: (token) => {
            const FONT_TYPES = [
              "textCase",
              "textDecoration",
              "paragraphSpacing",
              "letterSpacing",
              "fontSizes",
              "fontWeights",
              "lineHeights",
              "fontFamilies",
            ];

            return FONT_TYPES.includes(token.type);
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
          filter: (token) => token.path[0] === "Progressive",
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
            type: "boxShadow",
          },
        },
      ],
    },
  },
};
