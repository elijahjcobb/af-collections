/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */

import { AFObject } from "./AFObject";
import { AFArray } from "./AFArray";

/**
 * An implementation of an array that uses generics.
 */
export class AFArrayList<T> extends AFObject {

	/**
	 * The internal structure of an AFArrayList.
	 */
	private list: T[];

	/**
	 * Default constructor allowing dynamic parameter input of type T.
	 * @param {T} values The values to be used.
	 */
	public constructor(...values: T[]) {

		super();

		this.list = [];
		values.forEach((obj: T) => this.add(obj));

	}

	public removeAll(): void {

		this.list = [];

	}

	public toAFArray(): AFArray<T> {

		return new AFArray<T>(this);

	}

	/**
	 * Insert a value at a specific index.
	 * @param index {number} The insertion index.
	 * @param value {T} The value of type T to be inserted at index.
	 */
	public insert(index: number, value: T): void {

		this.list.splice(0, 0, value);

	}

	/**
	 * Check if the list contains no elements.
	 * @return {boolean} Is empty.
	 */
	public isEmpty(): boolean {

		return this.list.length === 0;

	}

	/**
	 * Add an object at the end of the list.
	 * @param {T} value The value to be added to the end of the list.
	 */
	public add(value: T): void {

		this.list.push(value);

	}

	public addAll(values: T[]): void {

		values.forEach((value: T) => this.add(value));

	}

	/**
	 * Get the object at a specific index of the list.
	 * @param {number} index The index of the value.
	 * @return {T} The object at the index.
	 */
	public get(index: number): T {

		return this.list[index];

	}

	/**
	 * Converts the list to a string non-recursively.
	 * @return {string} A string representation of the list.
	 */
	public toArrayString(): string {

		let s: string = "[";

		this.list.forEach((obj: T) => {

			s += obj + ", ";

		});

		s = s.substring(0, s.length - 2);
		s += "]";

		return s;

	}

	public join(separator: string): string {

		return this.list.join(separator);

	}

	/**
	 * Converts the list to a JavaScript array.
	 * @return {object} An array representation of list.
	 */
	public toArray(): T[] {

		return this.list;

	}

	/**
	 * Remove a value from the list at a specific index.
	 * @param {index} index The index where the value should be removed.
	 */
	public remove(index: number): void {

		this.list.splice(index, 1);

	}

	/**
	 * Removes a value from the list.
	 * @param {object} object The value to be removed from the list.
	 */
	public removeObject(object: T): void {

		let index: number = this.indexOf(object);
		if (index >= 0) this.remove(index);

	}

	/**
	 * Returns the size of the list.
	 * @return {number} The size of the list.
	 */
	public size(): number {

		return this.list.length;

	}

	public merge(list: AFArrayList<T>): void {

		list.forEach((value: T) => this.add(value));

	}

	/**
	 * Checks if the list contains a specific object.
	 * @param {T} value The object
	 * @return {boolean} Whether the list contains the object.
	 */
	public contains(value: T): boolean {

		return this.list.indexOf(value) !== -1;

	}

	/**
	 * Find the index of a specific value.
	 * @param {T} value The value.
	 * @return {number} The index of the value. Returns -1 if the list does not contain the value.
	 */
	public indexOf(value: T): number {

		return this.list.indexOf(value);

	}

	/**
	 * A iterator callback to loop through all elements in the list.
	 * @param {Function} iterator The callback iterator.
	 */
	//(err: error, res: color) => random;
	public forEach(iterator: ((value: T) => void)): void {

		for (let i: number = 0; i < this.size(); i++) {

			iterator(this.get(i));

		}

	}

	public async forEachSync(iterator: ((value: T) => Promise<void>)): Promise<void> {

		for (let i: number = 0; i < this.size(); i++) {

			await iterator(this.get(i));

		}

	}


	/**
	 * A static constructor that will create a list with the values of a JavaScript array.
	 * @param {T[]} objects The values to be added to new list. They must be of type T.
	 */
	public static initWithObjects<T> (objects: T[]): AFArrayList<T> {

		let list: AFArrayList<T> = new AFArrayList<T>();

		if (objects !== undefined && objects !== null) {

			objects.forEach((obj: T) => {

				list.add(obj);

			});

		}

		return list;

	}

}