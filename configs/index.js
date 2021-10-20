/* eslint-disable global-require, import/no-commonjs, import/unambiguous */
module.exports = {
    babel: require('./babel.config'),
    terser: require('./terser.config'),
    ignoreNotFoundExport: require('./ignore-not-found-export'),
};
