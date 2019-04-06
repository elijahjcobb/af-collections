/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */
export declare class AFSet<T> {
    private list;
    constructor(...objects: T[]);
    add(object: T): void;
    remove(object: T): void;
    union(set: AFSet<T>): AFSet<T>;
    intersection(set: AFSet<T>): AFSet<T>;
    difference(set: AFSet<T>): AFSet<T>;
    subset(set: AFSet<T>): boolean;
    print(): void;
}
