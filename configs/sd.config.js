module.exports = {
    "source": ["./src/constants/styles/design-tokens/input.json"],
    // If you don't want to call the registerTransform method a bunch of times
    // you can override the whole transform object directly. This works because
    // the .extend method copies everything in the config
    // to itself, allowing you to override things. It's also doing a deep merge
    // to protect from accidentally overriding nested attributes.
    "platforms": {
        "css": {
            "transformGroup": "css",
            "buildPath": "./src/constants/styles/design-tokens/",
            "files": [
                {
                    "format": "css/variables",
                    "destination": "variables.css"
                }
            ]
        },
        "js": {
            "transformGroup": "js",
            "buildPath": "./src/constants/styles/design-tokens/",
            "files": [{
                "destination": "variables.js",
                "format": "javascript/es6"
            }]
        },
        "javascript-flat": {
            "transformGroup": "js",
            "buildPath": "./src/constants/styles/design-tokens/",
            "files": [{
                "destination": "variables-flat.js",
                "format": "javascript/module-flat"
            }]
        }
    }
}