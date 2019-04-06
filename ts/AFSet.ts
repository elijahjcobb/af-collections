/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */

import { AFArrayList } from "./AFArrayList";

export class AFSet<T> {

	private list: AFArrayList<T>;

	public constructor(...objects: T[]) {

		this.list = new AFArrayList<T>();

		for (let i: number = 0; i < objects.length; i ++) {

			let object: T = objects[i];
			if (!this.list.contains(object)) this.list.add(object);

		}

	}

	public add(object: T): void {

		if (!this.list.contains(object)) this.list.add(object);

	}

	public remove(object: T): void {

		this.list.removeObject(object);

	}

	public union(set: AFSet<T>): AFSet<T> {

		let newSet: AFSet<T> = new AFSet<T>();

		let list: AFArrayList<T> = new AFArrayList<T>();
		this.list.forEach((object: T) => { if (!list.contains(object)) list.add(object); });
		set.list.forEach((object: T) => { if (!list.contains(object)) list.add(object); });
		newSet.list = list;

		return newSet;

	}

	public intersection(set: AFSet<T>): AFSet<T> {

		let newSet: AFSet<T> = new AFSet<T>();

		let list: AFArrayList<T> = new AFArrayList<T>();
		this.list.forEach((object: T) => { if (set.list.contains(object)) list.add(object); });
		newSet.list = list;

		return newSet;

	}

	public difference(set: AFSet<T>): AFSet<T> {

		let newSet: AFSet<T> = new AFSet<T>();

		let list: AFArrayList<T> = new AFArrayList<T>();
		this.list.forEach((object: T) => { if (!set.list.contains(object)) list.add(object); });
		newSet.list = list;

		return newSet;

	}

	public subset(set: AFSet<T>): boolean {

		for (let i: number = 0; i < this.list.size(); i++) if (!set.list.contains(this.list.get(i))) return false;

		return true;

	}

	public print(): void {

		console.log(this.list.toArrayString());

	}

}