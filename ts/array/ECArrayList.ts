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
import { ECArray } from "./ECArray";
import { ECArrayable } from "./ECArrayable";
import { ECIterator } from "../ECIterator";

/**
 * A generic mutable implementation of an array.
 */
export class ECArrayList<T> extends ECPrototype implements ECArrayable<T> {

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
	 * Create a ECIterator instance from this current instance.
	 * @return {ECIterator<T>} A new ECIterator.
	 */
	public toIterator(): ECIterator<T> {

		return ECIterator.initWithArrayList(this);

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
	 * Convert this instance to a ECArray.
	 * @return {string} This instance as a ECArray representation.
	 */
	public toArray(): ECArray<T> {

		return ECArray.initFromNativeArray(this.array);

	}

	/**
	 * Convert this instance to a ECArrayList.
	 * @return {string} This instance as a ECArrayList representation.
	 */
	public toArrayList(): ECArrayList<T> {

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
	 * Remove all values from the instance.
	 */
	public removeAll(): void {

		this.array = [];

	}

	/**
	 * Remove a value.
	 * @param {T} value The value to be removed.
	 */
	public removeValue(value: T): void {

		this.remove(this.indexOf(value));

	}

	/**
	 * Merge with another list instance.
	 * @param {ECArrayList<T>} otherList Another list of the same type.
	 */
	public merge(otherList: ECArrayList<T>): void {

		otherList.forEach((value: T) => this.add(value));

	}

	/**
	 * Create a new ECArrayList instance from specific values.
	 * @param {T} values The values to add to the new instance.
	 * @return {ECArrayList<T>} A new ECArrayList instance.
	 */
	public static initWithValues<T>(...values: T[]): ECArrayList<T> {

		let afArrayList: ECArrayList<T> = new ECArrayList<T>();
		afArrayList.array = values;

		return afArrayList;

	}

	/**
	 * Create a new ECArrayList from a native JavaScript array.
	 * @param {T[]} nativeArray The array of values to add to this instance.
	 * @return {ECArrayList<T>} A new ECArrayList instance.
	 */
	public static initFromNativeArray<T>(nativeArray: T[]): ECArrayList<T> {

		let afArrayList: ECArrayList<T> = new ECArrayList<T>();
		afArrayList.array = nativeArray;

		return afArrayList;

	}

	/**
	 * Create a new ECArrayList from a ECArray.
	 * @param {ECArray<T>} array The ECArray whose values should be added to this instance.
	 * @return {ECArrayList<T>} A new ECArrayList instance.
	 */
	public static initFromArray<T>(array: ECArray<T>): ECArrayList<T> {

		let afArrayList: ECArrayList<T> = new ECArrayList<T>();
		afArrayList.array = array.toNativeArray();

		return afArrayList;

	}

}