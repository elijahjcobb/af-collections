"use strict";
/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AFArrayList_1 = require("./AFArrayList");
class AFStack {
    constructor(...objects) {
        this.list = AFArrayList_1.AFArrayList.initWithObjects(objects);
    }
    push(object) {
        this.list.insert(0, object);
    }
    pop() {
        let value = this.list.get(0);
        this.list.remove(0);
        return value;
    }
    peek() {
        return this.list.get(0);
    }
    size() {
        return this.list.size();
    }
}
exports.AFStack = AFStack;
//# sourceMappingURL=AFStack.js.map