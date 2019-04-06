"use strict";
/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AFArray_1 = require("./array/AFArray");
const af_error_1 = require("af-error");
/**
 * A generic implementation of an iterator similar to a Java iterator.
 */
class AFIterator {
    /**
     * The default constructor will only create an instance. Use the static method helpers to create new instances.
     */
    constructor() {
        this.array = new AFArray_1.AFArray();
        this.index = 0;
    }
    /**
     * Checks if the iterator has a value after the current one.
     * @return {boolean} Whether there is another value after the current one.
     */
    hasNext() {
        return this.index + 1 <= this.array.size();
    }
    /**
     * Get the next value from the iterator.
     * @return {V} The value.
     */
    next() {
        let value = this.array.get(this.index);
        this.index++;
        if (value === undefined)
            throw af_error_1.AFErrorStack.newWithMessageAndType(af_error_1.AFErrorOriginType.BackEnd, af_error_1.AFErrorType.NullOrUndefined, Error("Iterator value is undefined. Check 'hastNext()' before calling 'next()'."));
        return value;
    }
    /**
     * Create a new AFIterator with values.
     * @param {V} values Values to be iterated through.
     * @return {AFIterator<V>} A new AFIterator instance.
     */
    static initWithValues(...values) {
        let iterator = new AFIterator();
        iterator.array = AFArray_1.AFArray.initFromNativeArray(values);
        return iterator;
    }
    /**
     * Create a new AFIterator with a native JavaScript array's values.
     * @param {V[]} values A native JavaScript array.
     * @return {AFIterator<V>} A new AFIterator instance.
     */
    static initWithNativeArray(values) {
        let iterator = new AFIterator();
        iterator.array = AFArray_1.AFArray.initFromNativeArray(values);
        return iterator;
    }
    /**
     * Create a new AFIterator with an AFArray's values.
     * @param {AFArray<V>} array An AFArray instance.
     * @return {AFIterator<V>} A new AFIterator instance.
     */
    static initWithArray(array) {
        let iterator = new AFIterator();
        iterator.array = array;
        return iterator;
    }
    /**
     * Create a new AFIterator with an AFArrayList's values.
     * @param {AFArrayList<V>} arrayList An AFArrayList instance.
     * @return {AFIterator<V>} A new AFIterator instance.
     */
    static initWithArrayList(arrayList) {
        let iterator = new AFIterator();
        iterator.array = AFArray_1.AFArray.initFromArrayList(arrayList);
        return iterator;
    }
}
exports.AFIterator = AFIterator;
