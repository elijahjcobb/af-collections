/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */
import { AFArrayList } from "./AFArrayList";
import { AFObject } from "./AFObject";
export declare class AFArray<T> extends AFObject {
    private array;
    constructor(array: AFArrayList<T> | number);
    toList(): AFArrayList<T>;
    /**
     * Check if the list contains no elements.
     * @return {boolean} Is empty.
     */
    isEmpty(): boolean;
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
     * Returns the size of the list.
     * @return {number} The size of the list.
     */
    size(): number;
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
    static initWithItems<V>(...values: V[]): AFArray<V>;
    static initWithArray<V>(array: V[]): AFArray<V>;
}
