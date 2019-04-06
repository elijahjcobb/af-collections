/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */
import { AFArrayList } from "./AFArrayList";
export declare class AFIterator<V> {
    private array;
    private index;
    constructor(array: AFArrayList<V>);
    hasNext(): boolean;
    next(): V;
}
