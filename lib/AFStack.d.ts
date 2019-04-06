/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */
export declare class AFStack<T> {
    private list;
    constructor(...objects: T[]);
    push(object: T): void;
    pop(): T;
    peek(): T;
    size(): number;
}
