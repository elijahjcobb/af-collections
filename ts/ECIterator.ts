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

import { ECArrayList } from "./array/ECArrayList";
import { ECArray } from "./array/ECArray";
import { ECErrorOriginType, ECErrorStack, ECErrorType } from "@elijahjcobb/error";

/**
 * A generic implementation of an iterator similar to a Java iterator.
 */
export class ECIterator<V> {

	private array: ECArray<V> = new ECArray<V>();
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
		if (value === undefined) throw ECErrorStack.newWithMessageAndType(ECErrorOriginType.BackEnd, ECErrorType.NullOrUndefined, new Error("Iterator value is undefined. Check 'hastNext()' before calling 'next()'."));
		return value;

	}

	/**
	 * Create a new ECIterator with values.
	 * @param {V} values Values to be iterated through.
	 * @return {ECIterator<V>} A new ECIterator instance.
	 */
	public static initWithValues<V>(...values: V[]): ECIterator<V> {

		let iterator: ECIterator<V> = new ECIterator<V>();
		iterator.array = ECArray.initFromNativeArray(values);

		return iterator;

	}

	/**
	 * Create a new ECIterator with a native JavaScript array's values.
	 * @param {V[]} values A native JavaScript array.
	 * @return {ECIterator<V>} A new ECIterator instance.
	 */
	public static initWithNativeArray<V>(values: V[]): ECIterator<V> {

		let iterator: ECIterator<V> = new ECIterator<V>();
		iterator.array = ECArray.initFromNativeArray(values);

		return iterator;

	}

	/**
	 * Create a new ECIterator with an ECArray's values.
	 * @param {ECArray<V>} array An ECArray instance.
	 * @return {ECIterator<V>} A new ECIterator instance.
	 */
	public static initWithArray<V>(array: ECArray<V>): ECIterator<V> {

		let iterator: ECIterator<V> = new ECIterator<V>();
		iterator.array = array;

		return iterator;

	}

	/**
	 * Create a new ECIterator with an ECArrayList's values.
	 * @param {ECArrayList<V>} arrayList An ECArrayList instance.
	 * @return {ECIterator<V>} A new ECIterator instance.
	 */
	public static initWithArrayList<V>(arrayList: ECArrayList<V>): ECIterator<V> {

		let iterator: ECIterator<V> = new ECIterator<V>();
		iterator.array = ECArray.initFromArrayList(arrayList);

		return iterator;

	}

}