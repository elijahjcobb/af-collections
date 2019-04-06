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
export declare type AFCSVTypes = string | number | boolean;
export declare class AFCSV extends AFObject {
    private readonly array;
    constructor(array: AFArray<AFDictionary<string, AFCSVTypes>>);
    compile(): string;
}
