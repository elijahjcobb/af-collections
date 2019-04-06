/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */

/**
 * An abstract class representing a base object for ampel.
 * Every class extends this class as it is the base class.
 */
export abstract class AFObject {

	/**
	 * Pretty print this into the console.
	 */
	public print(): void {

		console.dir(this, {depth: null});

	}

}