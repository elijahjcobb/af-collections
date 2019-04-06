/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */

import { AFArrayList } from "./array/AFArrayList";
import { AFArray } from "./array/AFArray";

export class AFEnum {

	/**
	 * Convert an enum to a string array.
	 * @param value The num.
	 * @return {AFArrayList<string>}
	 */
	public static convertEnumToArray(value: any): AFArray<string> {

		const StringIsNumber: any = (value2: any): any => isNaN(Number(value2)) === false;
		let values: string[] = Object.keys(value).filter(StringIsNumber).map((key: any) => value[key]);

		return AFArray.initFromNativeArray(values);

	}

	/**
	 * Convert an enum to a string array.
	 * @param value The num.
	 * @return {AFArrayList<string>}
	 */
	public static convertEnumToArrayList(value: any): AFArrayList<string> {

		const StringIsNumber: any = (value2: any): any => isNaN(Number(value2)) === false;
		let values: string[] = Object.keys(value).filter(StringIsNumber).map((key: any) => value[key]);

		return AFArrayList.initFromNativeArray(values);

	}

}