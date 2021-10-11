module.exports = function (plop) {
  plop.addHelper("upperCase", function (text) {
    return text.toUpperCase();
  });
  var pascalCase = (s) =>
    s.replace(/\w+/g, function (w) {
      return w[0].toUpperCase() + w.slice(1);
    });
  var files = {
    mainComponent: "plop-templates/main-component.js",
    styledComponent: "plop-templates/styled-component.js",
    cssSnippet: "plop-templates/css.js",
  };

  var createFunctionComponent = {
    type: "add",
    path: "src/components/{{kebabCase name}}/{{pascalCase name}}.tsx",
    templateFile: files.mainComponent,
  };

  var createStyledComp = {
    type: "add",
    path:
      "src/components/{{kebabCase name}}/styles/S{{pascalCase name}}{{pascalCase suffix}}.tsx",
    templateFile: files.styledComponent,
  };

  var createStyle = {
    type: "add",
    path: "src/components/{{kebabCase name}}/styles/S{{pascalCase name}}.tsx",
    templateFile: files.styledComponent,
  };

  var createCssSnippet = {
    type: "add",
    path: "src/components/{{kebabCase name}}/styles/CSS{{pascalCase name}}{{pascalCase suffix}}.tsx",
    templateFile: files.cssSnippet,
  };

  plop.setActionType("Usage:", function (answers, config, plop) {
    const { name, suffix } = answers;
    if (name && suffix) {
      return `Usage: <S${pascalCase(name)}${pascalCase(suffix)} />`;
    }
    if (name) {
      return `Usage: <${pascalCase(name)} />`;
    }
    return ``;
  });

  /* Input Options */
  var getComponentName = {
    type: "input",
    name: "name",
    message: "What is the component name?",
    validate: function (value) {
      if (/.+/.test(value)) {
        return true;
      }
      return "name is required";
    },
  };

  var getStyleSuffix = {
    type: "input",
    name: "suffix",
    message: "What is the styled component suffix?",
    validate: function (value) {
      if (/.+/.test(value)) {
        return true;
      }
      return "name is required";
    },
  };

  /* Generators */
  plop.setGenerator("fc", {
    description: "Function Component",
    prompts: [getComponentName],
    actions: [
      createFunctionComponent,
      createStyle,
      {
        type: "Usage:",
      },
    ],
  });

  plop.setGenerator("s", {
    description: "Styled Component",
    prompts: [getComponentName, getStyleSuffix],
    actions: [
      createStyledComp,
      {
        type: "Usage:",
      },
    ],
  });

  plop.setGenerator("css", {
    description: "Css Snippet",
    prompts: [getComponentName, getStyleSuffix],
    actions: [
      createCssSnippet,
    ],
  });
};
