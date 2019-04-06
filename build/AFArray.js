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
const AFArrayList_1 = require("./AFArrayList");
const AFObject_1 = require("./AFObject");
class AFArray extends AFObject_1.AFObject {
    constructor(array) {
        super();
        this.array = array;
    }
    toList() {
        return this.array;
    }
    /**
     * Check if the list contains no elements.
     * @return {boolean} Is empty.
     */
    isEmpty() {
        return this.array.isEmpty();
    }
    /**
     * Get the object at a specific index of the list.
     * @param {number} index The index of the value.
     * @return {T} The object at the index.
     */
    get(index) {
        return this.array.get(index);
    }
    /**
     * Converts the list to a string non-recursively.
     * @return {string} A string representation of the list.
     */
    toArrayString() {
        return this.array.toArrayString();
    }
    join(separator) {
        return this.array.join(separator);
    }
    /**
     * Converts the list to a JavaScript array.
     * @return {object} An array representation of list.
     */
    toArray() {
        return this.array.toArray();
    }
    /**
     * Returns the size of the list.
     * @return {number} The size of the list.
     */
    size() {
        return this.array.size();
    }
    /**
     * Checks if the list contains a specific object.
     * @param {T} value The object
     * @return {boolean} Whether the list contains the object.
     */
    contains(value) {
        return this.array.contains(value);
    }
    /**
     * Find the index of a specific value.
     * @param {T} value The value.
     * @return {number} The index of the value. Returns -1 if the list does not contain the value.
     */
    indexOf(value) {
        return this.array.indexOf(value);
    }
    /**
     * A iterator callback to loop through all elements in the list.
     * @param {Function} iterator The callback iterator.
     */
    forEach(iterator) {
        return this.array.forEach(iterator);
    }
    forEachSync(iterator) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.array.forEachSync(iterator);
        });
    }
    static initWithItems(...values) {
        let list = new AFArrayList_1.AFArrayList();
        values.forEach((value) => list.add(value));
        return list.toAFArray();
    }
    static initWithArray(array) {
        return AFArrayList_1.AFArrayList.initWithObjects(array).toAFArray();
    }
}
exports.AFArray = AFArray;
//# sourceMappingURL=AFArray.js.map