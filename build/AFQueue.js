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
class AFQueue {
    constructor(...objects) {
        this.list = AFArrayList_1.AFArrayList.initWithObjects(objects);
    }
    enqueue(object) {
        this.list.add(object);
    }
    dequeue() {
        let object = this.list.get(0);
        this.list.remove(0);
        return object;
    }
    peek() {
        return this.list.get(0);
    }
}
exports.AFQueue = AFQueue;
//# sourceMappingURL=AFQueue.js.map