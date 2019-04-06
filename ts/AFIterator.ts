/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */

import { AFArrayList } from "./AFArrayList";

export class AFIterator<V> {

	private array: AFArrayList<V>;
	private index: number;

	public constructor(array: AFArrayList<V>) {

		this.array = array;
		this.index = 0;

	}

	public hasNext(): boolean {

		return this.index + 1 <= this.array.size();

	}

	public next(): V {

		let value: V = this.array.get(this.index);
		this.index ++;
		if (value === undefined) new Error("Iterator value is undefined. Check 'hastNext()' before calling 'next()'.");
		return value;

	}

}