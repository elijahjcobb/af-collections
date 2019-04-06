/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */

import { AFObject } from "./AFObject";
import { AFDictionary } from "./AFDictionary";
import { AFArray } from "./AFArray";
import { AFArrayList } from "./AFArrayList";

export type AFCSVTypes = string | number | boolean;

export class AFCSV extends AFObject {

	private readonly array: AFArray<AFDictionary<string, AFCSVTypes>>;

	public constructor(array: AFArray<AFDictionary<string, AFCSVTypes>>) {

		super();

		this.array = array;

	}

	public compile(): string {

		let object: AFDictionary<string, AFCSVTypes> = this.array.get(0);
		if (!object) throw "";
		let keys: AFArray<string> = object.keys();

		let csv: string = keys.join(",");

		this.array.forEach((object: AFDictionary<string, AFCSVTypes>) => {

			let values: AFArrayList<AFCSVTypes> = new AFArrayList<AFCSVTypes>();

			keys.forEach((key: string) => {

				let value: AFCSVTypes = object.get(key);
				if (!value) {
					value = "";
				}

				values.add("\"" + value + "\"");

			});

			csv += "\n" + values.join(",");

		});

		return csv;

	}

}