/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */

import { AFObject } from "../AFObject";
import { AFArray } from "../array/AFArray";
import { AFDictionary } from "./AFDictionary";
import { AFMappable } from "./AFMappable";
import { AFIterator } from "../AFIterator";
import { AFErrorOriginType, AFErrorStack, AFErrorType } from "af-error";

/**
 * An implementation of a JSON object that uses generics.
 */
export class AFMap<K, V> extends AFObject implements AFMappable<K, V> {

	private map: Map<K, V> = new Map<K, V>();

	/**
	 * The default constructor will only create an instance. Use the static method helpers to create new instances.
	 */
	public constructor() {

		super();

	}

	/**
	 * Get a value for a specific key from the instance.
	 * @param {K} key The key to be used.
	 * @return {V} The value for the specified key.
	 */
	public get(key: K): V {

		return this.map.get(key);

	}

	/**
	 * Get the key for a specified value.
	 * @param {V} value The value.
	 * @return {K} The key for the specified value.
	 */
	public getKey(value: V): K {

		return this.keys().get(this.values().indexOf(value));

	}

	/**
	 * Returns the number of key value pairs on the instance.
	 * @return {number}
	 */
	public size(): number {

		return this.keys().size();

	}

	/**
	 * Checks if the instance contains a specific key.
	 * @param {K} key The key to be searched for.
	 * @return {boolean} Whether the key was found on the instance.
	 */
	public containsKey(key: K): boolean {

		return this.keys().contains(key);

	}

	/**
	 * Get all the keys of the instance.
	 * @return {AFArray<K>} A new AFArray instance containing all the keys on the instance.
	 */
	public keys(): AFArray<K> {

		return AFArray.initFromNativeArray<K>(Array.from(this.map.keys()));

	}

	/**
	 * Get an AFIterator instance with the keys from the instance.
	 * @return {AFIterator<K>}
	 */
	public keyIterator(): AFIterator<K> {

		return AFIterator.initWithArray(this.keys());

	}

	/**
	 * Checks if the instance contains a specific value.
	 * @param {V} value The value to be searched for.
	 * @return {boolean} Whether the value was found on the instance.
	 */
	public containsValue(value: V): boolean {

		return  this.values().contains(value);

	}

	/**
	 * Get all the values of the instance.
	 * @return {AFArray<V>} A new AFArray instance containing all the values on the instance.
	 */
	public values(): AFArray<V> {

		return AFArray.initFromNativeArray<V>(Array.from(this.map.values()));

	}

	/**
	 * Get an AFIterator instance with the values from the instance.
	 * @return {AFIterator<V>} A new AFIterator instance.
	 */
	public valueIterator(): AFIterator<V> {

		return AFIterator.initWithArray(this.values());

	}

	/**
	 * Checks if the instance contains a specific key and value pair.
	 * @param {K} key The key to be searched for.
	 * @param {V} value The value to be searched for.
	 * @return {boolean} Whether the key value pair was found on the instance.
	 */
	public containsKeyValuePair(key: K, value: V): boolean {

		return this.containsKey(key) && this.get(key) === value;

	}

	/**
	 * An iterator helper to iterator through every key value pair.
	 * @param {(key: K, value: V) => void} iterator An arrow function.
	 */
	public forEach(iterator: ((key: K, value: V) => void)): void {

		this.keys().forEach((key: K) => iterator(key, this.get(key)));

	}

	/**
	 * An iterator helper to iterator through every key value pair that supports each iteration being an async function.
	 * @param {(key: K, value: V) => Promise<void>} iterator An async arrow function.
	 * @return {Promise<void>} A promise.
	 */
	public async forEachSync(iterator: ((key: K, value: V) => Promise<void>)): Promise<void> {

		await this.keys().forEachSync(async (key: K) => await iterator(key, this.get(key)));

	}

	/**
	 * Convert this instance to a native JavaScript object. Calls toNativeObject() method on instance.
	 * @return {object} A native JavaScript object (JSON).
	 */
	public toJSON(): object {

		return this.toNativeObject();

	}

	/**
	 * Convert this instance to a native JavaScript object. Same as toJSON() function.
	 * @return {object} A native JavaScript object (JSON).
	 */
	public toNativeObject(): object {

		let json: object = {};

		this.forEach((key: K, value: V) => {

			if (typeof key !== "string") throw AFErrorStack.newWithMessageAndType(AFErrorOriginType.BackEnd, AFErrorType.ParameterIncorrectFormat,Error(`Key '${key}' is not a string. Native JavaScript objects must have a string for their keys.`));
			json[key as string] = value;

		});

		return json;

	}

	/**
	 * Convert this instance to a JSON string.
	 * @return {string} A string with JSON encoding.
	 */
	public toString(): string {

		return JSON.stringify(this.toNativeObject());

	}

	/**
	 * Convert this instance to a AFMap instance.
	 * @return {AFMap<K, V>} A new AFMap instance with the same internal data as the instance.
	 */
	public toMap(): AFMap<K, V> {

		return this;

	}

	/**
	 * Convert this instance to a native Map instance.
	 * @return {Map<K, V>} A new Map instance with the same internal data as the instance.
	 */
	public toNativeMap(): Map<K, V> {

		return this.map;

	}

	/**
	 * Convert this instance to a AFDictionary instance.
	 * @return {AFDictionary<K, V>} A new AFDictionary instance with the same internal data as the instance.
	 */
	public toDictionary(): AFDictionary<K, V> {

		return AFDictionary.initWithMap(this);

	}

	/**
	 * Set a value for a key.
	 * @param {K} key A key to be added.
	 * @param {V} value The value for the specified key.
	 */
	public set(key: K, value: V): void {

		this.map.set(key, value);

	}

	/**
	 * Remove the key and value for the specified key.
	 * @param {K} key The key of the key value pair to be removed.
	 */
	public remove(key: K): void {

		this.map.delete(key);

	}

	/**
	 * Remove the key and value for the specified value.
	 * @param {V} value The value of the key value pair to be removed.
	 */
	public removeValue(value: V): void {

		this.map.delete(this.getKey(value));

	}

	/**
	 * Create a new instance with keys and values.
	 * @param {K[]} keys A native JavaScript array of keys.
	 * @param {V[]} values A native JavaScript array of values.
	 * @return {AFMap<K, V>} A new AFMap instance.
	 */
	public static initWithKeysAndValues<K, V>(keys: K[], values:V[]): AFMap<K, V> {

		if (keys.length !== values.length) throw AFErrorStack.newWithMessageAndType(AFErrorOriginType.BackEnd, AFErrorType.InternalUnHandled,new Error(`The number of keys does not equal the number of values (${keys.length} !== ${values.length}).`));

		let map: AFMap<K, V> = new AFMap<K, V>();

		for (let i: number = 0; i < keys.length; i ++) {

			let key: K = keys[i];
			let value: V = values[i];

			map.set(key, value);

		}

		return map;

	}

	/**
	 * Create a new instance with keys and values.
	 * @param {K[]} keys An AFArray instance containing keys.
	 * @param {V[]} values An AFArray instance containing values.
	 * @return {AFMap<K, V>} A new AFMap instance.
	 */
	public static initWithKeyArrayAndValueArray<K, V>(keys: AFArray<K>, values: AFArray<V>): AFMap<K, V> {

		if (keys.size() !== values.size()) throw AFErrorStack.newWithMessageAndType(AFErrorOriginType.BackEnd, AFErrorType.InternalUnHandled, new Error(`The number of keys does not equal the number of values (${keys.size()} !== ${values.size()}).`));

		let map: AFMap<K, V> = new AFMap<K, V>();

		for (let i: number = 0; i < keys.size(); i ++) {

			let key: K = keys.get(i);
			let value: V = values.get(i);

			map.set(key, value);

		}

		return map;

	}

	/**
	 * Create a new instance with a native JavaScript object.
	 * @param {object} nativeObject A native JavaScript object.
	 * @return {AFMap<string, V>} A new AFDictionary instance.
	 */
	public static initWithNativeObject<V>(nativeObject: object): AFMap<string, V> {

		let map: AFMap<string, V> = new AFMap<string, V>();
		let keys: string[] = Object.keys(nativeObject);

		for (let i: number = 0; i < keys.length; i ++) {

			let key: string = keys[i];
			let value: V = nativeObject[key];

			map.set(key, value);

		}

		return map;

	}

	/**
	 * Create a new instance with a native Map instance.
	 * @param {Map<K, V>} map A native Map instance.
	 * @return {AFMap<K, V>} A new AFMap instance.
	 */
	public static initWithNativeMap<K, V>(map: Map<K, V>): AFMap<K, V> {

		let afMap: AFMap<K, V> = new AFMap<K, V>();
		afMap.map = map;

		return afMap;

	}

	/**
	 * Create a new instance with a AFDictionary instance.
	 * @param {AFDictionary<K, V>} dictionary An AFDictionary instance.
	 * @return {AFMap<K, V>} A new AFMap instance.
	 */
	public static initWithDictionary<K, V>(dictionary: AFDictionary<K, V>): AFMap<K, V> {

		return AFMap.initWithNativeMap(dictionary.toNativeMap());

	}

}