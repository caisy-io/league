
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
        ]
    ],
    presets: [
        [
            '@babel/preset-env',
            {
                corejs: '3',
                loose: true,
                modules: 'auto',
                targets: ['last 2 versions', 'ie >= 11'],
                useBuiltIns: 'usage',
            },
        ],
        '@babel/react',
        '@babel/preset-typescript',
    ],
};
