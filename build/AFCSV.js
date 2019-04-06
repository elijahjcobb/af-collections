"use strict";
/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AFObject_1 = require("./AFObject");
const AFArrayList_1 = require("./AFArrayList");
class AFCSV extends AFObject_1.AFObject {
    constructor(array) {
        super();
        this.array = array;
    }
    compile() {
        let object = this.array.get(0);
        if (!object)
            throw "";
        let keys = object.keys();
        let csv = keys.join(",");
        this.array.forEach((object) => {
            let values = new AFArrayList_1.AFArrayList();
            keys.forEach((key) => {
                let value = object.get(key);
                if (!value) {
                    value = "";
                }
                values.add("\"" + value + "\"");
            });
            csv += "\n" + values.join(",");
        });
        return csv;
    }
}
exports.AFCSV = AFCSV;
//# sourceMappingURL=AFCSV.js.map