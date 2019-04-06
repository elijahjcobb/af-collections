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
class AFSet {
    constructor(...objects) {
        this.list = new AFArrayList_1.AFArrayList();
        for (let i = 0; i < objects.length; i++) {
            let object = objects[i];
            if (!this.list.contains(object))
                this.list.add(object);
        }
    }
    add(object) {
        if (!this.list.contains(object))
            this.list.add(object);
    }
    remove(object) {
        this.list.removeObject(object);
    }
    union(set) {
        let newSet = new AFSet();
        let list = new AFArrayList_1.AFArrayList();
        this.list.forEach((object) => { if (!list.contains(object))
            list.add(object); });
        set.list.forEach((object) => { if (!list.contains(object))
            list.add(object); });
        newSet.list = list;
        return newSet;
    }
    intersection(set) {
        let newSet = new AFSet();
        let list = new AFArrayList_1.AFArrayList();
        this.list.forEach((object) => { if (set.list.contains(object))
            list.add(object); });
        newSet.list = list;
        return newSet;
    }
    difference(set) {
        let newSet = new AFSet();
        let list = new AFArrayList_1.AFArrayList();
        this.list.forEach((object) => { if (!set.list.contains(object))
            list.add(object); });
        newSet.list = list;
        return newSet;
    }
    subset(set) {
        for (let i = 0; i < this.list.size(); i++)
            if (!set.list.contains(this.list.get(i)))
                return false;
        return true;
    }
    print() {
        console.log(this.list.toArrayString());
    }
}
exports.AFSet = AFSet;
//# sourceMappingURL=AFSet.js.map