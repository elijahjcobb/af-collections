"use strict";
/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
class AFIterator {
    constructor(array) {
        this.array = array;
        this.index = 0;
    }
    hasNext() {
        return this.index + 1 <= this.array.size();
    }
    next() {
        let value = this.array.get(this.index);
        this.index++;
        if (value === undefined)
            new Error("Iterator value is undefined. Check 'hastNext()' before calling 'next()'.");
        return value;
    }
}
exports.AFIterator = AFIterator;
//# sourceMappingURL=AFIterator.js.map