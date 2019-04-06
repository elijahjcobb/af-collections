/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */

import { AFArrayList } from "./AFArrayList";

export class AFStack<T> {

	private list: AFArrayList<T>;

	public constructor(...objects: T[]) {

		this.list = AFArrayList.initWithObjects<T>(objects);

	}

	public push(object: T): void {

		this.list.insert(0, object);

	}

	public pop(): T {

		let value: T = this.list.get(0);
		this.list.remove(0);

		return value;

	}

	public peek(): T {

		return this.list.get(0);

	}

	public size(): number {

		return this.list.size();

	}


}