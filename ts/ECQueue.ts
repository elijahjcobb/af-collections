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

/**
 * A generic class representing a queue.
 */
export class ECQueue<T> {

	private list: ECArrayList<T> = new ECArrayList<T>();

	/**
	 * The default constructor will only create an instance. Use the static method helpers to create new instances.
	 */
	public constructor() {}

	/**
	 * Add an object onto the queue.
	 * @param {T} object The object to be added to the queue.
	 */
	public enqueue(object: T): void {

		this.list.add(object);

	}

	/**
	 * Remove an object from the queue.
	 * @return {T} The object that was dequeued.
	 */
	public dequeue(): T {

		let object: T = this.list.get(0);
		this.list.remove(0);

		return object;

	}

	/**
	 * Get the object that will be dequeued next.
	 * @return {T} The object that will be dequeued.
	 */
	public peek(): T {

		return this.list.get(0);

	}

	/**
	 * Create a new ECQueue instance from specific values.
	 * @param {T} values The values to add to the new instance.
	 * @return {ECQueue<T>} A new ECQueue instance.
	 */
	public static initWithValues<T>(...values: T[]): ECQueue<T> {

		let queue: ECQueue<T> = new ECQueue<T>();
		queue.list = ECArrayList.initFromNativeArray(values);

		return queue;

	}

	/**
	 * Create a new ECQueue from a native JavaScript array.
	 * @param {T[]} nativeArray The array of values to add to this instance.
	 * @return {ECQueue<T>} A new ECQueue instance.
	 */
	public static initFromNativeArray<T>(nativeArray: T[]): ECQueue<T> {

		let queue: ECQueue<T> = new ECQueue<T>();
		queue.list = ECArrayList.initFromNativeArray(nativeArray);

		return queue;

	}

	/**
	 * Create a new ECQueue from a ECArray.
	 * @param {ECArray<T>} array The ECArray whose values should be added to this instance.
	 * @return {ECQueue<T>} A new ECQueue instance.
	 */
	public static initFromArray<T>(array: ECArray<T>): ECQueue<T> {

		let queue: ECQueue<T> = new ECQueue<T>();
		queue.list = ECArrayList.initFromArray(array);

		return queue;

	}

	/**
	 * Create a new ECQueue from a ECArrayList.
	 * @param {ECArrayList<T>} arrayList The ECArrayList whose values should be added to this instance.
	 * @return {ECQueue<T>} A new ECQueue instance.
	 */
	public static initFromArrayList<T>(arrayList: ECArrayList<T>): ECQueue<T> {

		let queue: ECQueue<T> = new ECQueue<T>();
		queue.list = arrayList;

		return queue;

	}

}