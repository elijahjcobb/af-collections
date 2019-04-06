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

export class AFDictionary<K, V> extends AFObject {

	private readonly map: AFMap<K, V>;

	public constructor(map: AFMap<K, V>) {

		super();

		this.map = map;

	}

	/**
	 * Convert to a JSON representation non-recursively.
	 * @return {object} JSON object.
	 */
	public toJSON(): {} {

		return this.map.toJSON();

	}

	/**
	 * Convert to a String respresentation non-recursively.
	 * @return {string} JSON string.
	 */
	public toString(): string {

		return this.map.toString();

	}

	public toMap(): AFMap<K, V> {

		return this.map;

	}

	/**
	 * Get all keys.
	 * @return {AFArrayList<string>}
	 */
	public keys(): AFArray<K> {

		return this.map.keys();

	}

	/**
	 * Get all values.
	 * @return {AFArrayList<V>}
	 */
	public values(): AFArray<V> {

		return this.map.values();

	}

	/**
	 * Get a value with a specified key.
	 * @param {string} key The key of type string.
	 * @return {V} value The value of type V.
	 */
	public get(key: K): V {

		return this.map.get(key);

	}

	/**
	 * Check if the dictionary contains a value.
	 * @param {V} value The value of type V.
	 * @return {boolean} Whether the value exists.
	 */
	public containsValue(value: V): boolean {

		return this.map.containsValue(value);

	}

	/**
	 * Check if the dictionary contains a ky.
	 * @param {string} key The key to search for.
	 * @return {boolean} If the key was found.
	 */
	public containsKey(key: K): boolean {

		return this.map.containsKey(key);

	}

	/**
	 * An iterator.
	 * @param {Function} iterator
	 */
	public forEach(iterator: ((key: K, value: V) => void)): void {

		this.map.forEach(iterator);

	}

	/**
	 * A synchronous iterator.
	 * @param {Function} iterator
	 */
	public async forEachSync(iterator: ((key: K, value: V) => Promise<void>)): Promise<void> {

		await this.map.forEachSync(iterator);

	}

	public static initWithObject<V>(obj: object): AFDictionary<string, V> {

		return AFMap.initWithObject<V>(obj).toDictionary();

	}

}