/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */
export declare class AFQueue<T> {
    private list;
    constructor(...objects: T[]);
    enqueue(object: T): void;
    dequeue(): T;
    peek(): T;
}
