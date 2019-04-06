/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */
import { AFObject } from "./AFObject";
import { AFArray } from "./AFArray";
import { AFDictionary } from "./AFDictionary";
/**
 * An implementation of a JSON object that uses generics.
 */
export declare class AFMap<K, V> extends AFObject {
    /**
     * The internal structure of an AFMap.
     */
    private readonly map;
    /**
     * Default constructor for AFMap.
     */
    constructor();
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
    toDictionary(): AFDictionary<K, V>;
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
     * Set a value for a key.
     * @param {string} key The key of type string.
     * @param {V} value The value of type V.
     */
    set(key: K, value: V): void;
    /**
     * Get a value with a specified key.
     * @param {string} key The key of type string.
     * @return {V} value The value of type V.
     */
    get(key: K): V;
    /**
     * Remove an object for key.
     * @param {string} key
     */
    remove(key: K): void;
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
    /**
     * Static constructor to create dictionary from a JSON object.
     * @param {object} object The JSON object.
     * @return {AFMap<T>} A dictionary.
     */
    static initWithObject<V>(object: object): AFMap<string, any>;
    static initWithKeysAndValues<K, V>(keys: K[], values: V[]): AFMap<K, V>;
}
