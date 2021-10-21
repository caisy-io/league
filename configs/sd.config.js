module.exports = {
  source: [
    "./src/constants/styles/design-tokens/input/colors.json",
    "./src/constants/styles/design-tokens/input/fonts.json",
    "./src/constants/styles/design-tokens/input/fontFaces.json",
  ],
  // If you don't want to call the registerTransform method a bunch of times
  // you can override the whole transform object directly. This works because
  // the .extend method copies everything in the config
  // to itself, allowing you to override things. It's also doing a deep merge
  // to protect from accidentally overriding nested attributes.
  platforms: {
    cssColors: {
      transformGroup: "css",
      buildPath: "./src/constants/styles/design-tokens/colors/",
      files: [
        {
          format: "css/variables",
          destination: "colors.css",
          filter: {
            type: "color",
          },
        },
      ],
    },
    jsColors: {
      transformGroup: "js/colors",
      buildPath: "./src/constants/styles/design-tokens/colors/",
      files: [
        {
          destination: "colors.js",
          format: "javascript/es6",
          filter: {
            type: "color",
          },
        },
      ],
    },
    jsFlatColors: {
      transformGroup: "js/colors",
      buildPath: "./src/constants/styles/design-tokens/colors/",
      files: [
        {
          destination: "colors-flat.js",
          format: "javascript/module-flat",
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
    jsFonts: {
      transformGroup: "js/fonts",
      buildPath: "./src/constants/styles/design-tokens/fonts/",
      files: [
        {
          destination: "fonts.js",
          format: "javascript/es6",
          filter: (token) => {
            return token.filePath === "./src/constants/styles/design-tokens/input/fonts.json";
          },
        },
      ],
    },
    jsFlatFonts: {
      transformGroup: "js/fonts",
      buildPath: "./src/constants/styles/design-tokens/fonts/",
      files: [
        {
          destination: "fonts-flat.js",
          format: "javascript/module-flat",
          filter: {
            filePath: "./src/constants/styles/design-tokens/input/fonts.json",
          },
        },
      ],
    },
    // fontFaces: {
    //   transformGroup: "fontFaces",
    //   buildPath: "./src/constants/styles/design-tokens/fontFaces/",
    //   files: [
    //     {
    //       destination: "fontFaces.js",
    //       format: "javascript/es6",
    //       filter: {
    //         filePath: "./src/constants/styles/design-tokens/input/fontFaces.json",
    //       },
    //     },
    //   ],
    // },
  },
};
