/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */

/**
 * An abstract class representing a base object for all AFCollection classes.
 * Every class extends this class as it is the base class.
 */
export abstract class AFObject {

	/**
	 * Pretty print the instance into the console.
	 */
	public print(): void {

		console.dir(this, {depth: null});

	}

}