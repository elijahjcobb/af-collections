/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */

import { AFArrayList } from "./AFArrayList";
import { AFObject } from "./AFObject";

export class AFArray<T> extends AFObject{

	private array: AFArrayList<T>;

	public constructor(array: AFArrayList<T>) {

		super();

		this.array = array;

	}

	public toList(): AFArrayList<T> {

		return this.array;

	}

	/**
	 * Check if the list contains no elements.
	 * @return {boolean} Is empty.
	 */
	public isEmpty(): boolean {

		return this.array.isEmpty();

	}

	/**
	 * Get the object at a specific index of the list.
	 * @param {number} index The index of the value.
	 * @return {T} The object at the index.
	 */
	public get(index: number): T {

		return this.array.get(index);

	}

	/**
	 * Converts the list to a string non-recursively.
	 * @return {string} A string representation of the list.
	 */
	public toArrayString(): string {

		return this.array.toArrayString();

	}

	public join(separator: string): string {

		return this.array.join(separator);

	}

	/**
	 * Converts the list to a JavaScript array.
	 * @return {object} An array representation of list.
	 */
	public toArray(): T[] {

		return this.array.toArray();

	}

	/**
	 * Returns the size of the list.
	 * @return {number} The size of the list.
	 */
	public size(): number {

		return this.array.size();

	}

	/**
	 * Checks if the list contains a specific object.
	 * @param {T} value The object
	 * @return {boolean} Whether the list contains the object.
	 */
	public contains(value: T): boolean {

		return this.array.contains(value);

	}

	/**
	 * Find the index of a specific value.
	 * @param {T} value The value.
	 * @return {number} The index of the value. Returns -1 if the list does not contain the value.
	 */
	public indexOf(value: T): number {

		return this.array.indexOf(value);

	}

	/**
	 * A iterator callback to loop through all elements in the list.
	 * @param {Function} iterator The callback iterator.
	 */
	public forEach(iterator: ((value: T) => void)): void {

		return this.array.forEach(iterator);

	}

	public async forEachSync(iterator: ((value: T) => Promise<void>)): Promise<void> {

		await this.array.forEachSync(iterator);

	}

	public static initWithItems<V>(...values: V[]): AFArray<V> {

		let list: AFArrayList<V> = new AFArrayList<V>();
		values.forEach((value: V) => list.add(value));
		return list.toAFArray();

	}

	public static initWithArray<V>(array: V[]): AFArray<V> {

		return  AFArrayList.initWithObjects(array).toAFArray();

	}


}