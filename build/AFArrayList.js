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
const AFArray_1 = require("./AFArray");
/**
 * An implementation of an array that uses generics.
 */
class AFArrayList extends AFObject_1.AFObject {
    /**
     * Default constructor allowing dynamic parameter input of type T.
     * @param {T} values The values to be used.
     */
    constructor(...values) {
        super();
        this.list = [];
        values.forEach((obj) => this.add(obj));
    }
    removeAll() {
        this.list = [];
    }
    toAFArray() {
        return new AFArray_1.AFArray(this);
    }
    /**
     * Insert a value at a specific index.
     * @param index {number} The insertion index.
     * @param value {T} The value of type T to be inserted at index.
     */
    insert(index, value) {
        this.list.splice(0, 0, value);
    }
    /**
     * Check if the list contains no elements.
     * @return {boolean} Is empty.
     */
    isEmpty() {
        return this.list.length === 0;
    }
    /**
     * Add an object at the end of the list.
     * @param {T} value The value to be added to the end of the list.
     */
    add(value) {
        this.list.push(value);
    }
    addAll(values) {
        values.forEach((value) => this.add(value));
    }
    /**
     * Get the object at a specific index of the list.
     * @param {number} index The index of the value.
     * @return {T} The object at the index.
     */
    get(index) {
        return this.list[index];
    }
    /**
     * Converts the list to a string non-recursively.
     * @return {string} A string representation of the list.
     */
    toArrayString() {
        let s = "[";
        this.list.forEach((obj) => {
            s += obj + ", ";
        });
        s = s.substring(0, s.length - 2);
        s += "]";
        return s;
    }
    join(separator) {
        return this.list.join(separator);
    }
    /**
     * Converts the list to a JavaScript array.
     * @return {object} An array representation of list.
     */
    toArray() {
        return this.list;
    }
    /**
     * Remove a value from the list at a specific index.
     * @param {index} index The index where the value should be removed.
     */
    remove(index) {
        this.list.splice(index, 1);
    }
    /**
     * Removes a value from the list.
     * @param {object} object The value to be removed from the list.
     */
    removeObject(object) {
        let index = this.indexOf(object);
        if (index >= 0)
            this.remove(index);
    }
    /**
     * Returns the size of the list.
     * @return {number} The size of the list.
     */
    size() {
        return this.list.length;
    }
    merge(list) {
        list.forEach((value) => this.add(value));
    }
    /**
     * Checks if the list contains a specific object.
     * @param {T} value The object
     * @return {boolean} Whether the list contains the object.
     */
    contains(value) {
        return this.list.indexOf(value) !== -1;
    }
    /**
     * Find the index of a specific value.
     * @param {T} value The value.
     * @return {number} The index of the value. Returns -1 if the list does not contain the value.
     */
    indexOf(value) {
        return this.list.indexOf(value);
    }
    /**
     * A iterator callback to loop through all elements in the list.
     * @param {Function} iterator The callback iterator.
     */
    //(err: error, res: color) => random;
    forEach(iterator) {
        for (let i = 0; i < this.size(); i++) {
            iterator(this.get(i));
        }
    }
    forEachSync(iterator) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < this.size(); i++) {
                yield iterator(this.get(i));
            }
        });
    }
    /**
     * A static constructor that will create a list with the values of a JavaScript array.
     * @param {T[]} objects The values to be added to new list. They must be of type T.
     */
    static initWithObjects(objects) {
        let list = new AFArrayList();
        if (objects !== undefined && objects !== null) {
            objects.forEach((obj) => {
                list.add(obj);
            });
        }
        return list;
    }
}
exports.AFArrayList = AFArrayList;
//# sourceMappingURL=AFArrayList.js.map