/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */

import { AFArrayList } from "./AFArrayList";
import { AFObject } from "../AFObject";
import { AFArrayable } from "./AFArrayable";
import { AFIterator } from "../AFIterator";

/**
 * A generic immutable implementation of an array.
 */
export class AFArray<T> extends AFObject implements AFArrayable<T> {

	private array: T[] = [];

	/**
	 * The default constructor will only create an instance. Use the static method helpers to create new instances.
	 */
	public constructor() {

		super();

	}

	/**
	 * Get the value at a specific index.
	 * @param {number} index The index for the value to be returned.
	 * @return {T} The value at the specific index.
	 */
	public get(index: number): T {

		return this.array[index];

	}

	/**
	 * Checks if the instance is empty.
	 * @return {boolean} Whether the instance contains values.
	 */
	public isEmpty(): boolean {

		return this.array.length === 0;

	}

	/**
	 * Returns the amount of items the instances is holding.
	 * @return {number} The number of items.
	 */
	public size(): number {

		return this.array.length;

	}

	/**
	 * Checks if the instance contains a specific value.
	 * @param {T} value The value to look for.
	 * @return {boolean} Whether the specified value was found.
	 */
	public contains(value: T): boolean {

		return this.indexOf(value) !== -1;

	}

	/**
	 * Returns the index of a specific value. Returns -1 if a value can not be found.
	 * @param {T} value The value to find the index for.
	 * @return {number} The index of the value. Will be -1 if the value does not exist in the instance.
	 */
	public indexOf(value: T): number {

		return this.array.indexOf(value);

	}

	/**
	 * A iteration loop handler.
	 * @param {(value: T) => void} iterator The iterator arrow function to be used.
	 */
	public forEach(iterator: ((value: T) => void)) {

		for (let i: number = 0; i < this.size(); i ++) iterator(this.get(i));

	}

	/**
	 * A iteration loop handler using promises.
	 * @param {(value: T) => Promise<void>} iterator An async function that returns a promise.
	 * @return {Promise<void>} Returns a promise.
	 */
	public async forEachSync(iterator: ((value: T) => Promise<void>)): Promise<void> {

		for (let i: number = 0; i < this.size(); i++) await iterator(this.get(i));

	}

	/**
	 * Create a AFIterator instance from this current instance.
	 * @return {AFIterator<T>} A new AFIterator.
	 */
	public toIterator(): AFIterator<T> {

		return AFIterator.initWithArray(this);

	}

	/**
	 * Convert this instance to a string using the provided separator.
	 * @param {string} separator The separator to be used. Defaults to ", ".
	 * @return {string} This instance as a string representation.
	 */
	public toString(separator?: string): string {

		return this.array.join(separator || ", ")

	}

	/**
	 * Convert this instance to native JavaScript array.
	 * @return {T[]} This instance as a JavaScript array representation.
	 */
	public toNativeArray(): T[] {

		return this.array;

	}

	/**
	 * Convert this instance to a AFArray.
	 * @return {string} This instance as a AFArray representation.
	 */
	public toAFArray(): AFArray<T> {

		return this;

	}

	/**
	 * Convert this instance to a AFArrayList.
	 * @return {string} This instance as a AFArrayList representation.
	 */
	public toAFArrayList(): AFArrayList<T> {

		return AFArrayList.initFromArray(this);

	}

	/**
	 * Create a new AFArray instance from specific values.
	 * @param {T} values The values to add to the new instance.
	 * @return {AFArray<T>} A new AFArray instance.
	 */
	public static initWithValues<T>(...values: T[]): AFArray<T> {

		let afArray: AFArray<T> = new AFArray<T>();
		afArray.array = values;

		return afArray;

	}

	/**
	 * Create a new AFArray from a native JavaScript array.
	 * @param {T[]} nativeArray The array of values to add to this instance.
	 * @return {AFArray<T>} A new AFArray instance.
	 */
	public static initFromNativeArray<T>(nativeArray: T[]): AFArray<T> {

		let afArray: AFArray<T> = new AFArray<T>();
		afArray.array = nativeArray;

		return afArray;

	}

	/**
	 * Create a new AFArray from a AFArrayList.
	 * @param {AFArrayList<T>} arrayList The AFArrayList whose values should be added to this instance.
	 * @return {AFArray<T>} A new AFArray instance.
	 */
	public static initFromArrayList<T>(arrayList: AFArrayList<T>): AFArray<T> {

		let afArray: AFArray<T> = new AFArray<T>();
		afArray.array = arrayList.toNativeArray();

		return afArray;

	}

}