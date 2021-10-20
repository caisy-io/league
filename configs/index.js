/* eslint-disable global-require, import/no-commonjs, import/unambiguous */
module.exports = {
    babel: require('./babel.config'),
    htmlMinifier: require('./html-minifier.config'),
    terser: require('./terser.config'),
    ignoreNotFoundExport: require('./ignore-not-found-export'),
};
