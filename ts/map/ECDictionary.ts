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
import { ECMappable } from "./ECMappable";
import { ECArray } from "../array/ECArray";
import { ECMap } from "./ECMap";
import { ECIterator } from "../ECIterator";
import { ECErrorOriginType, ECErrorStack, ECErrorType } from "@elijahjcobb/error";

/**
 * A immutable generic implementation of a native javascript object.
 */
export class ECDictionary<K, V> extends ECPrototype implements ECMappable<K, V> {

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
	 * @return {ECArray<K>} A new ECArray instance containing all the keys on the instance.
	 */
	public keys(): ECArray<K> {

		return ECArray.initFromNativeArray<K>(Array.from(this.map.keys()));

	}

	/**
	 * Get an ECIterator instance with the keys from the instance.
	 * @return {ECIterator<K>}
	 */
	public keyIterator(): ECIterator<K> {

		return ECIterator.initWithArray(this.keys());

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
	 * @return {ECArray<V>} A new ECArray instance containing all the values on the instance.
	 */
	public values(): ECArray<V> {

		return ECArray.initFromNativeArray<V>(Array.from(this.map.values()));

	}

	/**
	 * Get an ECIterator instance with the values from the instance.
	 * @return {ECIterator<V>} A new ECIterator instance.
	 */
	public valueIterator(): ECIterator<V> {

		return ECIterator.initWithArray(this.values());

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

			if (typeof key !== "string") throw ECErrorStack.newWithMessageAndType(ECErrorOriginType.BackEnd, ECErrorType.ParameterIncorrectFormat,new Error(`Key '${key}' is not a string. Native JavaScript objects must have a string for their keys.`));
			json[key as unknown as string] = value;

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
	 * Convert this instance to a ECMap instance.
	 * @return {ECMap<K, V>} A new ECMap instance with the same internal data as the instance.
	 */
	public toMap(): ECMap<K, V> {

		return ECMap.initWithNativeMap(this.map);

	}

	/**
	 * Convert this instance to a native Map instance.
	 * @return {Map<K, V>} A new Map instance with the same internal data as the instance.
	 */
	public toNativeMap(): Map<K, V> {

		return this.map;

	}

	/**
	 * Convert this instance to a ECDictionary instance.
	 * @return {ECDictionary<K, V>} A new ECDictionary instance with the same internal data as the instance.
	 */
	public toDictionary(): ECDictionary<K, V> {

		return this;

	}

	/**
	 * Create a new instance with keys and values.
	 * @param {K[]} keys A native JavaScript array of keys.
	 * @param {V[]} values A native JavaScript array of values.
	 * @return {ECDictionary<K, V>} A new ECDictionary instance.
	 */
	public static initWithKeysAndValues<K, V>(keys: K[], values:V[]): ECDictionary<K, V> {

		if (keys.length !== values.length) throw ECErrorStack.newWithMessageAndType(ECErrorOriginType.BackEnd, ECErrorType.ParameterIncorrectFormat, new Error(`The number of keys does not equal the number of values (${keys.length} !== ${values.length}).`));

		let afDictionary: ECDictionary<K, V> = new ECDictionary<K, V>();
		let map: Map<K, V> = new Map<K, V>();

		for (let i: number = 0; i < keys.length; i ++) {

			let key: K = keys[i];
			let value: V = values[i];

			map.set(key, value);

		}

		afDictionary.map = map;

		return afDictionary;

	}

	/**
	 * Create a new instance with keys and values.
	 * @param {K[]} keys An ECArray instance containing keys.
	 * @param {V[]} values An ECArray instance containing values.
	 * @return {ECDictionary<K, V>} A new ECDictionary instance.
	 */
	public static initWithKeyArrayAndValueArray<K, V>(keys: ECArray<K>, values: ECArray<V>): ECDictionary<K, V> {

		if (keys.size() !== values.size()) throw ECErrorStack.newWithMessageAndType(ECErrorOriginType.BackEnd, ECErrorType.ParameterIncorrectFormat,  new Error(`The number of keys does not equal the number of values (${keys.size()} !== ${values.size()}).`));

		let afDictionary: ECDictionary<K, V> = new ECDictionary<K, V>();
		let map: Map<K, V> = new Map<K, V>();

		for (let i: number = 0; i < keys.size(); i ++) {

			let key: K = keys.get(i);
			let value: V = values.get(i);

			map.set(key, value);

		}

		afDictionary.map = map;

		return afDictionary;

	}

	/**
	 * Create a new instance with a native JavaScript object.
	 * @param {object} nativeObject A native JavaScript object.
	 * @return {ECDictionary<string, V>} A new ECDictionary instance.
	 */
	public static initWithNativeObject<V>(nativeObject: object): ECDictionary<string, V> {

		let afDictionary: ECDictionary<string, V> = new ECDictionary<string, V>();
		let map: Map<string, V> = new Map<string, V>();
		let keys: string[] = Object.keys(nativeObject);

		for (let i: number = 0; i < keys.length; i ++) {

			let key: string = keys[i];
			let value: V = nativeObject[key];

			map.set(key, value);

		}

		afDictionary.map = map;

		return afDictionary;

	}

	/**
	 * Create a new instance with a native Map instance.
	 * @param {Map<K, V>} map A native Map instance.
	 * @return {ECDictionary<K, V>} A new ECDictionary instance.
	 */
	public static initWithNativeMap<K, V>(map: Map<K, V>): ECDictionary<K, V> {

		let afDictionary: ECDictionary<K, V> = new ECDictionary<K, V>();
		afDictionary.map = map;

		return afDictionary;

	}

	/**
	 * Create a new instance with a Map instance.
	 * @param {ECMap<K, V>} map An ECMap instance.
	 * @return {ECDictionary<K, V>} A new ECDictionary instance.
	 */
	public static initWithMap<K, V>(map: ECMap<K, V>): ECDictionary<K, V> {

		return ECDictionary.initWithNativeMap(map.toNativeMap());

	}

}