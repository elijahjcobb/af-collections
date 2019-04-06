"use strict";
/**
 *
 * Ampel Feedback
 * Formative Developments, LLC.
 * 2018
 *
 * Elijah Cobb
 * elijah@ampelfeedback.com
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
class AFEquality {
    static equal(object1, object2) {
        let type1 = typeof object1;
        let type2 = typeof object2;
        let typeSafe1 = object1;
        if (type2 !== type1) {
        }
        return true;
    }
    static strict(object1, object2) {
        return true;
    }
}
exports.default = AFEquality;
//# sourceMappingURL=AFEquality.js.map