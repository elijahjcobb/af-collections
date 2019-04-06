/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */

import { AFObject } from "../AFObject";
import { AFArray } from "./AFArray";
import { AFArrayable } from "./AFArrayable";
import { AFIterator } from "../AFIterator";

/**
 * A generic mutable implementation of an array.
 */
export class AFArrayList<T> extends AFObject implements AFArrayable<T> {

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

		return AFIterator.initWithArrayList(this);

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

		return AFArray.initFromNativeArray(this.array);

	}

	/**
	 * Convert this instance to a AFArrayList.
	 * @return {string} This instance as a AFArrayList representation.
	 */
	public toAFArrayList(): AFArrayList<T> {

		return this;

	}

	/**
	 * Insert a value at a specific index.
	 * @param {T} value The value to be inserted.
	 * @param {number} index The index the value should be inserted at.
	 */
	public insert(value: T, index: number): void {

		this.array.splice(0, 0, value);

	}

	/**
	 * Add a value at the end of this instance.
	 * @param {T} value The value to be added.
	 */
	public add(value: T): void {

		this.array.push(value);

	}

	/**
	 * Add values at the end of this instance.
	 * @param {T} values The values to be added.
	 */
	public addAll(...values: T[]): void {

		this.array.push(...values);

	}

	/**
	 * Remove a value by its index.
	 * @param {number} index The index that should be removed.
	 */
	public remove(index: number): void {

		this.array.splice(index, 1);

	}

	/**
	 * Remove a value.
	 * @param {T} value The value to be removed.
	 */
	public removeValue(value: T): void {

		this.remove(this.indexOf(value));

	}

	/**
	 * Create a new AFArrayList instance from specific values.
	 * @param {T} values The values to add to the new instance.
	 * @return {AFArrayList<T>} A new AFArrayList instance.
	 */
	public static initWithValues<T>(...values: T[]): AFArrayList<T> {

		let afArrayList: AFArrayList<T> = new AFArrayList<T>();
		afArrayList.array = values;

		return afArrayList;

	}

	/**
	 * Create a new AFArrayList from a native JavaScript array.
	 * @param {T[]} nativeArray The array of values to add to this instance.
	 * @return {AFArrayList<T>} A new AFArrayList instance.
	 */
	public static initFromNativeArray<T>(nativeArray: T[]): AFArrayList<T> {

		let afArrayList: AFArrayList<T> = new AFArrayList<T>();
		afArrayList.array = nativeArray;

		return afArrayList;

	}

	/**
	 * Create a new AFArrayList from a AFArray.
	 * @param {AFArray<T>} array The AFArray whose values should be added to this instance.
	 * @return {AFArrayList<T>} A new AFArrayList instance.
	 */
	public static initFromArray<T>(array: AFArray<T>): AFArrayList<T> {

		let afArrayList: AFArrayList<T> = new AFArrayList<T>();
		afArrayList.array = array.toNativeArray();

		return afArrayList;

	}

}