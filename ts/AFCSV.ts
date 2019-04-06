/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */

import { AFObject } from "./AFObject";
import { AFDictionary } from "./map/AFDictionary";
import { AFArray } from "./array/AFArray";
import { AFArrayList } from "./array/AFArrayList";

/**
 * Allowed types for AFCSV.
 */
export type AFCSVTypes = string | number | boolean;

/**
 * A helper class to convert an AFArray instance into a CSV file.
 */
export class AFCSV extends AFObject {

	private readonly array: AFArray<AFDictionary<string, AFCSVTypes>>;

	/**
	 * The constructor to make new instances of a AFCSV.
	 * @param {AFArray<AFDictionary<string, AFCSVTypes>>} array An AFArray instance that contains AFDictionary instances.
	 */
	public constructor(array: AFArray<AFDictionary<string, AFCSVTypes>>) {

		super();

		this.array = array;

	}

	/**
	 * Compile a string that is a CSV representation of the internal data.
	 * @return {string} A CSV string representation of internal data.
	 */
	public compile(): string {

		let object: AFDictionary<string, AFCSVTypes> = this.array.get(0);
		if (!object) throw "";
		let keys: AFArray<string> = object.keys();

		let csv: string = keys.toString(",");

		this.array.forEach((object: AFDictionary<string, AFCSVTypes>) => {

			let values: AFArrayList<AFCSVTypes> = new AFArrayList<AFCSVTypes>();

			keys.forEach((key: string) => {

				let value: AFCSVTypes = object.get(key);
				if (!value) {
					value = "";
				}

				values.add("\"" + value + "\"");

			});

			csv += "\n" + values.toString(",");

		});

		return csv;

	}

}