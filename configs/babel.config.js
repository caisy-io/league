
module.exports = {
    cacheDirectory: true,
    plugins: [
        [
            "styled-components",
            {
                "ssr": true,
                "displayName": true,
                "preprocess": false
            }
        ],
        [
            "@babel/plugin-transform-react-jsx",
            {
                "runtime": "automatic"
            }
        ]
    ],
    presets: [
        [
            '@babel/preset-env',
            {
                corejs: '3',
                loose: true,
                modules: 'auto',
                targets: ['last 2 versions', "> 2%", "not IE 11"],
                useBuiltIns: 'usage',
            },
        ],
        '@babel/preset-typescript',

        ["@babel/preset-react", { runtime: "automatic" }],
    ],
};
