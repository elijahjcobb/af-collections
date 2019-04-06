/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */

import { AFArrayList } from "./AFArrayList";

export class AFQueue<T> {

	private list: AFArrayList<T>;

	public constructor(...objects: T[]) {

		this.list = AFArrayList.initWithObjects<T>(objects);

	}

	public enqueue(object: T): void {

		this.list.add(object);

	}

	public dequeue(): T {

		let object: T = this.list.get(0);
		this.list.remove(0);

		return object;

	}

	public peek(): T {

		return this.list.get(0);

	}
}