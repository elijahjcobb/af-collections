/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */
import { AFObject } from "./AFObject";
import { AFArray } from "./AFArray";
/**
 * An implementation of an array that uses generics.
 */
export declare class AFArrayList<T> extends AFObject {
    /**
     * The internal structure of an AFArrayList.
     */
    private list;
    /**
     * Default constructor allowing dynamic parameter input of type T.
     * @param {T} values The values to be used.
     */
    constructor(...values: T[]);
    removeAll(): void;
    toAFArray(): AFArray<T>;
    /**
     * Insert a value at a specific index.
     * @param index {number} The insertion index.
     * @param value {T} The value of type T to be inserted at index.
     */
    insert(index: number, value: T): void;
    /**
     * Check if the list contains no elements.
     * @return {boolean} Is empty.
     */
    isEmpty(): boolean;
    /**
     * Add an object at the end of the list.
     * @param {T} value The value to be added to the end of the list.
     */
    add(value: T): void;
    addAll(values: T[]): void;
    /**
     * Get the object at a specific index of the list.
     * @param {number} index The index of the value.
     * @return {T} The object at the index.
     */
    get(index: number): T;
    /**
     * Converts the list to a string non-recursively.
     * @return {string} A string representation of the list.
     */
    toArrayString(): string;
    join(separator: string): string;
    /**
     * Converts the list to a JavaScript array.
     * @return {object} An array representation of list.
     */
    toArray(): T[];
    /**
     * Remove a value from the list at a specific index.
     * @param {index} index The index where the value should be removed.
     */
    remove(index: number): void;
    /**
     * Removes a value from the list.
     * @param {object} object The value to be removed from the list.
     */
    removeObject(object: T): void;
    /**
     * Returns the size of the list.
     * @return {number} The size of the list.
     */
    size(): number;
    merge(list: AFArrayList<T>): void;
    /**
     * Checks if the list contains a specific object.
     * @param {T} value The object
     * @return {boolean} Whether the list contains the object.
     */
    contains(value: T): boolean;
    /**
     * Find the index of a specific value.
     * @param {T} value The value.
     * @return {number} The index of the value. Returns -1 if the list does not contain the value.
     */
    indexOf(value: T): number;
    /**
     * A iterator callback to loop through all elements in the list.
     * @param {Function} iterator The callback iterator.
     */
    forEach(iterator: ((value: T) => void)): void;
    forEachSync(iterator: ((value: T) => Promise<void>)): Promise<void>;
    /**
     * A static constructor that will create a list with the values of a JavaScript array.
     * @param {T[]} objects The values to be added to new list. They must be of type T.
     */
    static initWithObjects<T>(objects: T[]): AFArrayList<T>;
}
