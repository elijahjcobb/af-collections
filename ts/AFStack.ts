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
 * A generic class representing a stack.
 */
export class AFStack<T> {

	private list: AFArrayList<T> = new AFArrayList<T>();

	/**
	 * The default constructor will only create an instance. Use the static method helpers to create new instances.
	 */
	public constructor() {

	}

	/**
	 * Place an object onto the top of the stack.
	 * @param {T} object The object to be placed on the top of the stack.
	 */
	public push(object: T): void {

		this.list.insert(object, 0);

	}

	/**
	 * Take the object of the top of the stack.
	 * @return {T} The object that was on the top of the stack.
	 */
	public pop(): T {

		let value: T = this.list.get(0);
		this.list.remove(0);

		return value;

	}

	/**
	 * View the object that is currently on the top of the stack.
	 * @return {T} The object on the top of the stack.
	 */
	public peek(): T {

		return this.list.get(0);

	}

	/**
	 * Get the number of items in the stack.
	 * @return {number} The number of items in the stack.
	 */
	public size(): number {

		return this.list.size();

	}

	/**
	 * Create a new AFStack instance from specific values.
	 * @param {T} values The values to add to the new instance.
	 * @return {AFStack<T>} A new AFStack instance.
	 */
	public static initWithValues<T>(...values: T[]): AFStack<T> {

		let stack: AFStack<T> = new AFStack<T>();
		stack.list = AFArrayList.initFromNativeArray(values);

		return stack;

	}

	/**
	 * Create a new AFStack from a native JavaScript array.
	 * @param {T[]} nativeArray The array of values to add to this instance.
	 * @return {AFStack<T>} A new AFStack instance.
	 */
	public static initFromNativeArray<T>(nativeArray: T[]): AFStack<T> {

		let stack: AFStack<T> = new AFStack<T>();
		stack.list = AFArrayList.initFromNativeArray(nativeArray);

		return stack;

	}

	/**
	 * Create a new AFStack from a AFArray.
	 * @param {AFArray<T>} array The AFArray whose values should be added to this instance.
	 * @return {AFStack<T>} A new AFStack instance.
	 */
	public static initFromArray<T>(array: AFArray<T>): AFStack<T> {

		let stack: AFStack<T> = new AFStack<T>();
		stack.list = AFArrayList.initFromArray(array);

		return stack;

	}

	/**
	 * Create a new AFStack from a AFArrayList.
	 * @param {AFArrayList<T>} arrayList The AFArrayList whose values should be added to this instance.
	 * @return {AFStack<T>} A new AFStack instance.
	 */
	public static initFromArrayList<T>(arrayList: AFArrayList<T>): AFStack<T> {

		let stack: AFStack<T> = new AFStack<T>();
		stack.list = arrayList;

		return stack;

	}

}