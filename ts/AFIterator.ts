/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */

import { AFArrayList } from "./array/AFArrayList";
import { AFArray } from "./array/AFArray";

/**
 * A generic implementation of an iterator similar to a Java iterator.
 */
export class AFIterator<V> {

	private array: AFArray<V> = new AFArray<V>();
	private index: number = 0;

	/**
	 * The default constructor will only create an instance. Use the static method helpers to create new instances.
	 */
	public constructor() {

	}

	/**
	 * Checks if the iterator has a value after the current one.
	 * @return {boolean} Whether there is another value after the current one.
	 */
	public hasNext(): boolean {

		return this.index + 1 <= this.array.size();

	}

	/**
	 * Get the next value from the iterator.
	 * @return {V} The value.
	 */
	public next(): V {

		let value: V = this.array.get(this.index);
		this.index ++;
		if (value === undefined) new Error("Iterator value is undefined. Check 'hastNext()' before calling 'next()'.");
		return value;

	}

	/**
	 * Create a new AFIterator with values.
	 * @param {V} values Values to be iterated through.
	 * @return {AFIterator<V>} A new AFIterator instance.
	 */
	public static initWithValues<V>(...values: V[]): AFIterator<V> {

		let iterator: AFIterator<V> = new AFIterator<V>();
		iterator.array = AFArray.initFromNativeArray(values);

		return iterator;

	}

	/**
	 * Create a new AFIterator with a native JavaScript array's values.
	 * @param {V[]} values A native JavaScript array.
	 * @return {AFIterator<V>} A new AFIterator instance.
	 */
	public static initWithNativeArray<V>(values: V[]): AFIterator<V> {

		let iterator: AFIterator<V> = new AFIterator<V>();
		iterator.array = AFArray.initFromNativeArray(values);

		return iterator;

	}

	/**
	 * Create a new AFIterator with an AFArray's values.
	 * @param {AFArray<V>} array An AFArray instance.
	 * @return {AFIterator<V>} A new AFIterator instance.
	 */
	public static initWithArray<V>(array: AFArray<V>): AFIterator<V> {

		let iterator: AFIterator<V> = new AFIterator<V>();
		iterator.array = array;

		return iterator;

	}

	/**
	 * Create a new AFIterator with an AFArrayList's values.
	 * @param {AFArrayList<V>} arrayList An AFArrayList instance.
	 * @return {AFIterator<V>} A new AFIterator instance.
	 */
	public static initWithArrayList<V>(arrayList: AFArrayList<V>): AFIterator<V> {

		let iterator: AFIterator<V> = new AFIterator<V>();
		iterator.array = AFArray.initFromArrayList(arrayList);

		return iterator;

	}

}