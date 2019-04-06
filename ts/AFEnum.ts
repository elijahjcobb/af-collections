/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */

import { AFArrayList } from "./AFArrayList";
import { AFArray } from "./AFArray";

export class AFEnum {

	/**
	 * Convert an enum to a string array.
	 * @param value The num.
	 * @return {AFArrayList<string>}
	 */
	public static convertEnumToArray(value: any): AFArray<string> {

		const StringIsNumber: any = (value2: any): any => isNaN(Number(value2)) === false;
		let values: string[] = Object.keys(value).filter(StringIsNumber).map((key: any) => value[key]);

		return AFArrayList.initWithObjects<string>(values).toAFArray();

	}

	/**
	 * Convert an enum to a string array.
	 * @param value The num.
	 * @return {AFArrayList<string>}
	 */
	public static convertEnumToArrayList(value: any): AFArrayList<string> {

		const StringIsNumber: any = (value2: any): any => isNaN(Number(value2)) === false;
		let values: string[] = Object.keys(value).filter(StringIsNumber).map((key: any) => value[key]);

		return AFArrayList.initWithObjects<string>(values);

	}

}