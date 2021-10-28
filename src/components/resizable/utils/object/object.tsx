/**
 * Check whether the two given objects are equal, optionally invoking
 * a comparison function to apply on each element in the object.
 *
 * @example
 * isEqual({foo: {}}, {foo: {}}, EqualityIterators.DEEP); // true
 * isEqual({foo: {}}, {foo: {}}, EqualityIterators.SHALLOW); // false
 * isEqual({foo: 'bar'}, {}); // false (defaults to DEEP)
 *
 * @param {object} a
 * @param {object} b
 * @param {function} [iterator = EqualityIterators.DEEP]
 * @returns {boolean}
 */
 export const isEqual = (a, b) => {
    if (a === b) {
        return true;
    }

    if (typeof(a) !== typeof(b)) {
        return false;
    }

    if (typeof(a) === "object" && Object.keys(a).length === Object.keys(b).length) {
        return Object.keys(a).every(key => isEqual(a[key], b[key]));
    }

    if (Array.isArray(a) && a.length === b.length) {
        return a.every((item, i) => isEqual(a[i], b[i]))
    }

    return false;
};