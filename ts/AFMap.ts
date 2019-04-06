/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */

import { AFObject } from "./AFObject";
import { AFArrayList } from "./AFArrayList";
import { AFArray } from "./AFArray";
import { AFDictionary } from "./AFDictionary";

/**
 * An implementation of a JSON object that uses generics.
 */
export class AFMap <K, V> extends AFObject {

	/**
	 * The internal structure of an AFMap.
	 */
	private readonly map: Map<K, V>;

	/**
	 * Default constructor for AFMap.
	 */
	public constructor() {

		super();

		this.map = new Map<K, V>();

	}

	/**
	 * Convert to a JSON representation non-recursively.
	 * @return {object} JSON object.
	 */
	public toJSON(): {} {

		let json: object = {};

		this.forEach((key: K, value: V) => {

			json[key + ""] = value;

		});

		return json;

	}

	/**
	 * Convert to a String respresentation non-recursively.
	 * @return {string} JSON string.
	 */
	public toString(): string {

		try {

			return JSON.stringify(this.toJSON());

		} catch (e) {

			return "{}";

		}

	}

	public toDictionary(): AFDictionary<K, V> {

		return new AFDictionary<K, V>(this);

	}

	/**
	 * Get all keys.
	 * @return {AFArrayList<string>}
	 */
	public keys(): AFArray<K> {

		let keys: K[] = Array.from(this.map.keys());
		let list: AFArrayList<K> = AFArrayList.initWithObjects<K>(keys);

		return new AFArray<K>(list);

	}

	/**
	 * Get all values.
	 * @return {AFArrayList<V>}
	 */
	public values(): AFArray<V> {

		let values: AFArrayList<V> = new AFArrayList<V>();

		this.keys().forEach((key: K) => {

			values.add(this.get(key));

		});

		return new AFArray<V>(values);

	}

	/**
	 * Set a value for a key.
	 * @param {string} key The key of type string.
	 * @param {V} value The value of type V.
	 */
	public set(key: K, value: V): void {

		this.map.set(key, value);

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
	 * Remove an object for key.
	 * @param {string} key
	 */
	public remove(key: K): void {

		this.map.delete(key);

	}

	/**
	 * Check if the dictionary contains a value.
	 * @param {V} value The value of type V.
	 * @return {boolean} Whether the value exists.
	 */
	public containsValue(value: V): boolean {

		let keys: AFArray<K> = this.keys();

		for (let i: number = 0; i < keys.size(); i ++) {

			let key: K = keys.get(i);
			if (this.get(key) === value) return true;

		}

		return false;

	}

	/**
	 * Check if the dictionary contains a ky.
	 * @param {string} key The key to search for.
	 * @return {boolean} If the key was found.
	 */
	public containsKey(key: K): boolean {

		return this.keys().indexOf(key) !== -1;

	}

	/**
	 * An iterator.
	 * @param {Function} iterator
	 */
	public forEach(iterator: ((key: K, value: V) => void)): void {

		this.map.forEach((value: V, key: K) => {

			iterator(key, value);

		});

	}

	/**
	 * A synchronous iterator.
	 * @param {Function} iterator
	 */
	public async forEachSync(iterator: ((key: K, value: V) => Promise<void>)): Promise<void> {

		await this.keys().forEachSync(async (key: K) => {

			await iterator(key, this.get(key));

		})

	}

	/**
	 * Static constructor to create dictionary from a JSON object.
	 * @param {object} object The JSON object.
	 * @return {AFMap<T>} A dictionary.
	 */
	public static initWithObject<V>(object: object): AFMap<string, any> {

		if (!object) return new AFMap<string, any>();
		let keys: string[] = Object.keys(object);
		let map: AFMap<string, any> = new AFMap<string, any>();

		keys.forEach((key: string) => {

			let value: any = object[key];
			map.set(key, value);

		});

		return map;

	}

	public static initWithKeysAndValues<K, V>(keys: K[], values: V[]): AFMap<K, V> {

		if (!keys) return new AFMap<K, V>();
		if (!values) return new AFMap<K, V>();
		if (keys.length !== values.length) return new AFMap<K, V>();

		let map: AFMap<K, V> = new AFMap<K, V>();

		for (let i: number = 0; i < keys.length; i ++) {

			map.set(keys[i], values[i]);

		}

		return map;

	}

}