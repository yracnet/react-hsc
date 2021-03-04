
const isFunctionAsync = (value) => {
    return value.constructor.name === "AsyncFunction";
}
const isFunction = (value) => {
    return typeof value === 'function';
}
const isArray = (value) => {
    return Array.isArray(value);
}
const isString = (value) => {
    return typeof value === 'string';
}
const isObject = (value) => {
    return typeof value === 'object';
}
const forceClone = (object) => {
    if (isArray(object)) {
        return [...object];
    } else if (isObject(object)) {
        return { ...object };
    }
    return object;
}
const compareValue = (o1, o2) => {
    if (typeof o1 !== typeof o2) {
        return false;
    }
    if (isObject(o1) || isArray(o1)) {
        const l1 = Object.keys(o1).length; 
        const l2 = Object.keys(o2).length;
        if (l1 === l2) { 
            return Object.keys(o1).every( 
                key => o2.hasOwnProperty(key) 
                    && o2[key] === o1[key]); 
        }
        return false;
    }
    return o1 === o2;
}
const utils = {
    compareValue,
    forceClone,
    isString,
    isArray,
    isObject,
    isFunction,
    isFunctionAsync
}

export default utils;
