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
 * A generic class representing a queue.
 */
export class AFQueue<T> {

	private list: AFArrayList<T> = new AFArrayList<T>();

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
	 * Create a new AFQueue instance from specific values.
	 * @param {T} values The values to add to the new instance.
	 * @return {AFQueue<T>} A new AFQueue instance.
	 */
	public static initWithValues<T>(...values: T[]): AFQueue<T> {

		let queue: AFQueue<T> = new AFQueue<T>();
		queue.list = AFArrayList.initFromNativeArray(values);

		return queue;

	}

	/**
	 * Create a new AFQueue from a native JavaScript array.
	 * @param {T[]} nativeArray The array of values to add to this instance.
	 * @return {AFQueue<T>} A new AFQueue instance.
	 */
	public static initFromNativeArray<T>(nativeArray: T[]): AFQueue<T> {

		let queue: AFQueue<T> = new AFQueue<T>();
		queue.list = AFArrayList.initFromNativeArray(nativeArray);

		return queue;

	}

	/**
	 * Create a new AFQueue from a AFArray.
	 * @param {AFArray<T>} array The AFArray whose values should be added to this instance.
	 * @return {AFQueue<T>} A new AFQueue instance.
	 */
	public static initFromArray<T>(array: AFArray<T>): AFQueue<T> {

		let queue: AFQueue<T> = new AFQueue<T>();
		queue.list = AFArrayList.initFromArray(array);

		return queue;

	}

	/**
	 * Create a new AFQueue from a AFArrayList.
	 * @param {AFArrayList<T>} arrayList The AFArrayList whose values should be added to this instance.
	 * @return {AFQueue<T>} A new AFQueue instance.
	 */
	public static initFromArrayList<T>(arrayList: AFArrayList<T>): AFQueue<T> {

		let queue: AFQueue<T> = new AFQueue<T>();
		queue.list = arrayList;

		return queue;

	}

}