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
const AFMap_1 = require("./AFMap");
class AFDictionary extends AFObject_1.AFObject {
    constructor(map) {
        super();
        this.map = map;
    }
    /**
     * Convert to a JSON representation non-recursively.
     * @return {object} JSON object.
     */
    toJSON() {
        return this.map.toJSON();
    }
    /**
     * Convert to a String respresentation non-recursively.
     * @return {string} JSON string.
     */
    toString() {
        return this.map.toString();
    }
    toMap() {
        return this.map;
    }
    /**
     * Get all keys.
     * @return {AFArrayList<string>}
     */
    keys() {
        return this.map.keys();
    }
    /**
     * Get all values.
     * @return {AFArrayList<V>}
     */
    values() {
        return this.map.values();
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
     * Check if the dictionary contains a value.
     * @param {V} value The value of type V.
     * @return {boolean} Whether the value exists.
     */
    containsValue(value) {
        return this.map.containsValue(value);
    }
    /**
     * Check if the dictionary contains a ky.
     * @param {string} key The key to search for.
     * @return {boolean} If the key was found.
     */
    containsKey(key) {
        return this.map.containsKey(key);
    }
    /**
     * An iterator.
     * @param {Function} iterator
     */
    forEach(iterator) {
        this.map.forEach(iterator);
    }
    /**
     * A synchronous iterator.
     * @param {Function} iterator
     */
    forEachSync(iterator) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.map.forEachSync(iterator);
        });
    }
    static initWithObject(obj) {
        return AFMap_1.AFMap.initWithObject(obj).toDictionary();
    }
}
exports.AFDictionary = AFDictionary;
//# sourceMappingURL=AFDictionary.js.map