/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */

import { AFArrayList } from "./array/AFArrayList";
import { AFArray } from "./array/AFArray";

export class AFSet<T> {

	private list: AFArrayList<T> = new AFArrayList<T>();

	/**
	 * The default constructor will only create an instance. Use the static method helpers to create new instances.
	 */
	public constructor(...objects: T[]) {

	}

	/**
	 * Add an object to the set.
	 * @param {T} object The object to be added to the set.
	 */
	public add(object: T): void {

		if (!this.list.contains(object)) this.list.add(object);

	}

	/**
	 * Remove an object from the set.
	 * @param {T} object The object to be removed from the set.
	 */
	public remove(object: T): void {

		this.list.removeValue(object);

	}

	/**
	 * Create a new set from this set and another set.
	 * @param {AFSet<T>} set Another set to unionize with this set.
	 * @return {AFSet<T>} A new AFSet instance.
	 */
	public union(set: AFSet<T>): AFSet<T> {

		let newSet: AFSet<T> = new AFSet<T>();

		let list: AFArrayList<T> = new AFArrayList<T>();
		this.list.forEach((object: T) => { if (!list.contains(object)) list.add(object); });
		set.list.forEach((object: T) => { if (!list.contains(object)) list.add(object); });
		newSet.list = list;

		return newSet;

	}

	/**
	 * Create a new set from the intersection of this set and another set.
	 * @param {AFSet<T>} set Another set to intersect with this set.
	 * @return {AFSet<T>} A new AFSet instance.
	 */
	public intersection(set: AFSet<T>): AFSet<T> {

		let newSet: AFSet<T> = new AFSet<T>();

		let list: AFArrayList<T> = new AFArrayList<T>();
		this.list.forEach((object: T) => { if (set.list.contains(object)) list.add(object); });
		newSet.list = list;

		return newSet;

	}

	/**
	 * Create a new set from the difference between this set and another set.
	 * @param {AFSet<T>} set Another set to get the difference between.
	 * @return {AFSet<T>} A new AFSet instance.
	 */
	public difference(set: AFSet<T>): AFSet<T> {

		let newSet: AFSet<T> = new AFSet<T>();

		let list: AFArrayList<T> = new AFArrayList<T>();
		this.list.forEach((object: T) => { if (!set.list.contains(object)) list.add(object); });
		newSet.list = list;

		return newSet;

	}

	/**
	 * Checks if a set is a subset of this set.
	 * @param {AFSet<T>} set A possible subset.
	 * @return {boolean} Whether the specified set is a subset of this set.
	 */
	public subset(set: AFSet<T>): boolean {

		for (let i: number = 0; i < this.list.size(); i++) if (!set.list.contains(this.list.get(i))) return false;

		return true;

	}

	/**
	 * Create a new AFSet instance from specific values.
	 * @param {T} values The values to add to the new instance.
	 * @return {AFSet<T>} A new AFSet instance.
	 */
	public static initWithValues<T>(...values: T[]): AFSet<T> {

		let set: AFSet<T> = new AFSet<T>();
		set.list = AFArrayList.initFromNativeArray(values);

		return set;

	}

	/**
	 * Create a new AFSet from a native JavaScript array.
	 * @param {T[]} nativeArray The array of values to add to this instance.
	 * @return {AFSet<T>} A new AFSet instance.
	 */
	public static initFromNativeArray<T>(nativeArray: T[]): AFSet<T> {

		let set: AFSet<T> = new AFSet<T>();
		set.list = AFArrayList.initFromNativeArray(nativeArray);

		return set;

	}

	/**
	 * Create a new AFSet from a AFArray.
	 * @param {AFArray<T>} array The AFArray whose values should be added to this instance.
	 * @return {AFSet<T>} A new AFSet instance.
	 */
	public static initFromArray<T>(array: AFArray<T>): AFSet<T> {

		let set: AFSet<T> = new AFSet<T>();
		set.list = AFArrayList.initFromArray(array);

		return set;

	}

	/**
	 * Create a new AFSet from a AFArrayList.
	 * @param {AFArrayList<T>} arrayList The AFArrayList whose values should be added to this instance.
	 * @return {AFSet<T>} A new AFSet instance.
	 */
	public static initFromArrayList<T>(arrayList: AFArrayList<T>): AFSet<T> {

		let set: AFSet<T> = new AFSet<T>();
		set.list = arrayList;

		return set;

	}

}