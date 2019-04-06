"use strict";
/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const AFObject_1 = require("./AFObject");
const AFArrayList_1 = require("./AFArrayList");
const AFArray_1 = require("./AFArray");
const AFDictionary_1 = require("./AFDictionary");
/**
 * An implementation of a JSON object that uses generics.
 */
class AFMap extends AFObject_1.AFObject {
    /**
     * Default constructor for AFMap.
     */
    constructor() {
        super();
        this.map = new Map();
    }
    /**
     * Convert to a JSON representation non-recursively.
     * @return {object} JSON object.
     */
    toJSON() {
        let json = {};
        this.forEach((key, value) => {
            json[key + ""] = value;
        });
        return json;
    }
    /**
     * Convert to a String respresentation non-recursively.
     * @return {string} JSON string.
     */
    toString() {
        try {
            return JSON.stringify(this.toJSON());
        }
        catch (e) {
            return "{}";
        }
    }
    toDictionary() {
        return new AFDictionary_1.AFDictionary(this);
    }
    /**
     * Get all keys.
     * @return {AFArrayList<string>}
     */
    keys() {
        let keys = Array.from(this.map.keys());
        let list = AFArrayList_1.AFArrayList.initWithObjects(keys);
        return new AFArray_1.AFArray(list);
    }
    /**
     * Get all values.
     * @return {AFArrayList<V>}
     */
    values() {
        let values = new AFArrayList_1.AFArrayList();
        this.keys().forEach((key) => {
            values.add(this.get(key));
        });
        return new AFArray_1.AFArray(values);
    }
    /**
     * Set a value for a key.
     * @param {string} key The key of type string.
     * @param {V} value The value of type V.
     */
    set(key, value) {
        this.map.set(key, value);
    }
    /**
     * Get a value with a specified key.
     * @param {string} key The key of type string.
     * @return {V} value The value of type V.
     */
    get(key) {
        return this.map.get(key);
    }
    /**
     * Remove an object for key.
     * @param {string} key
     */
    remove(key) {
        this.map.delete(key);
    }
    /**
     * Check if the dictionary contains a value.
     * @param {V} value The value of type V.
     * @return {boolean} Whether the value exists.
     */
    containsValue(value) {
        let keys = this.keys();
        for (let i = 0; i < keys.size(); i++) {
            let key = keys.get(i);
            if (this.get(key) === value)
                return true;
        }
        return false;
    }
    /**
     * Check if the dictionary contains a ky.
     * @param {string} key The key to search for.
     * @return {boolean} If the key was found.
     */
    containsKey(key) {
        return this.keys().indexOf(key) !== -1;
    }
    /**
     * An iterator.
     * @param {Function} iterator
     */
    forEach(iterator) {
        this.map.forEach((value, key) => {
            iterator(key, value);
        });
    }
    /**
     * A synchronous iterator.
     * @param {Function} iterator
     */
    forEachSync(iterator) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.keys().forEachSync((key) => __awaiter(this, void 0, void 0, function* () {
                yield iterator(key, this.get(key));
            }));
        });
    }
    /**
     * Static constructor to create dictionary from a JSON object.
     * @param {object} object The JSON object.
     * @return {AFMap<T>} A dictionary.
     */
    static initWithObject(object) {
        if (!object)
            return new AFMap();
        let keys = Object.keys(object);
        let map = new AFMap();
        keys.forEach((key) => {
            let value = object[key];
            map.set(key, value);
        });
        return map;
    }
    static initWithKeysAndValues(keys, values) {
        if (!keys)
            return new AFMap();
        if (!values)
            return new AFMap();
        if (keys.length !== values.length)
            return new AFMap();
        let map = new AFMap();
        for (let i = 0; i < keys.length; i++) {
            map.set(keys[i], values[i]);
        }
        return map;
    }
}
exports.AFMap = AFMap;
//# sourceMappingURL=AFMap.js.map