/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */
import { AFObject } from "./AFObject";
import { AFMap } from "./AFMap";
import { AFArray } from "./AFArray";
export declare class AFDictionary<K, V> extends AFObject {
    private readonly map;
    constructor(map: AFMap<K, V>);
    /**
     * Convert to a JSON representation non-recursively.
     * @return {object} JSON object.
     */
    toJSON(): {};
    /**
     * Convert to a String respresentation non-recursively.
     * @return {string} JSON string.
     */
    toString(): string;
    toMap(): AFMap<K, V>;
    /**
     * Get all keys.
     * @return {AFArrayList<string>}
     */
    keys(): AFArray<K>;
    /**
     * Get all values.
     * @return {AFArrayList<V>}
     */
    values(): AFArray<V>;
    /**
     * Get a value with a specified key.
     * @param {string} key The key of type string.
     * @return {V} value The value of type V.
     */
    get(key: K): V;
    /**
     * Check if the dictionary contains a value.
     * @param {V} value The value of type V.
     * @return {boolean} Whether the value exists.
     */
    containsValue(value: V): boolean;
    /**
     * Check if the dictionary contains a ky.
     * @param {string} key The key to search for.
     * @return {boolean} If the key was found.
     */
    containsKey(key: K): boolean;
    /**
     * An iterator.
     * @param {Function} iterator
     */
    forEach(iterator: ((key: K, value: V) => void)): void;
    /**
     * A synchronous iterator.
     * @param {Function} iterator
     */
    forEachSync(iterator: ((key: K, value: V) => Promise<void>)): Promise<void>;
    static initWithObject<V>(obj: object): AFDictionary<string, V>;
}
