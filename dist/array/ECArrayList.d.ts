/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 *
 * Copyright 2019 Elijah Cobb
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
 * to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */
import { ECPrototype } from "../ECPrototype";
import { ECArray } from "./ECArray";
import { ECArrayable } from "./ECArrayable";
import { ECIterator } from "../ECIterator";
/**
 * A generic mutable implementation of an array.
 */
export declare class ECArrayList<T> extends ECPrototype implements ECArrayable<T> {
    private array;
    /**
     * The default constructor will only create an instance. Use the static method helpers to create new instances.
     */
    constructor();
    /**
     * Get the value at a specific index.
     * @param {number} index The index for the value to be returned.
     * @return {T} The value at the specific index.
     */
    get(index: number): T;
    /**
     * Checks if the instance is empty.
     * @return {boolean} Whether the instance contains values.
     */
    isEmpty(): boolean;
    /**
     * Returns the amount of items the instances is holding.
     * @return {number} The number of items.
     */
    size(): number;
    /**
     * Checks if the instance contains a specific value.
     * @param {T} value The value to look for.
     * @return {boolean} Whether the specified value was found.
     */
    contains(value: T): boolean;
    /**
     * Returns the index of a specific value. Returns -1 if a value can not be found.
     * @param {T} value The value to find the index for.
     * @return {number} The index of the value. Will be -1 if the value does not exist in the instance.
     */
    indexOf(value: T): number;
    /**
     * A iteration loop handler.
     * @param {(value: T) => void} iterator The iterator arrow function to be used.
     */
    forEach(iterator: ((value: T) => void)): void;
    /**
     * A iteration loop handler using promises.
     * @param {(value: T) => Promise<void>} iterator An async function that returns a promise.
     * @return {Promise<void>} Returns a promise.
     */
    forEachSync(iterator: ((value: T) => Promise<void>)): Promise<void>;
    /**
     * Create a ECIterator instance from this current instance.
     * @return {ECIterator<T>} A new ECIterator.
     */
    toIterator(): ECIterator<T>;
    /**
     * Convert this instance to a string using the provided separator.
     * @param {string} separator The separator to be used. Defaults to ", ".
     * @return {string} This instance as a string representation.
     */
    toString(separator?: string): string;
    /**
     * Convert this instance to native JavaScript array.
     * @return {T[]} This instance as a JavaScript array representation.
     */
    toNativeArray(): T[];
    /**
     * Convert this instance to a ECArray.
     * @return {string} This instance as a ECArray representation.
     */
    toArray(): ECArray<T>;
    /**
     * Convert this instance to a ECArrayList.
     * @return {string} This instance as a ECArrayList representation.
     */
    toArrayList(): ECArrayList<T>;
    /**
     * Insert a value at a specific index.
     * @param {T} value The value to be inserted.
     * @param {number} index The index the value should be inserted at.
     */
    insert(value: T, index: number): void;
    /**
     * Add a value at the end of this instance.
     * @param {T} value The value to be added.
     */
    add(value: T): void;
    /**
     * Add values at the end of this instance.
     * @param {T} values The values to be added.
     */
    addAll(...values: T[]): void;
    /**
     * Remove a value by its index.
     * @param {number} index The index that should be removed.
     */
    remove(index: number): void;
    /**
     * Remove all values from the instance.
     */
    removeAll(): void;
    /**
     * Remove a value.
     * @param {T} value The value to be removed.
     */
    removeValue(value: T): void;
    /**
     * Merge with another list instance.
     * @param {ECArrayList<T>} otherList Another list of the same type.
     */
    merge(otherList: ECArrayList<T>): void;
    /**
     * Create a new ECArrayList instance from specific values.
     * @param {T} values The values to add to the new instance.
     * @return {ECArrayList<T>} A new ECArrayList instance.
     */
    static initWithValues<T>(...values: T[]): ECArrayList<T>;
    /**
     * Create a new ECArrayList from a native JavaScript array.
     * @param {T[]} nativeArray The array of values to add to this instance.
     * @return {ECArrayList<T>} A new ECArrayList instance.
     */
    static initFromNativeArray<T>(nativeArray: T[]): ECArrayList<T>;
    /**
     * Create a new ECArrayList from a ECArray.
     * @param {ECArray<T>} array The ECArray whose values should be added to this instance.
     * @return {ECArrayList<T>} A new ECArrayList instance.
     */
    static initFromArray<T>(array: ECArray<T>): ECArrayList<T>;
}
