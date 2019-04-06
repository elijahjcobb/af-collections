"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const AFObject_1 = require("../prototyping/AFObject");
const AFErrorStack_1 = require("../errors/AFErrorStack");
const AFErrorOriginType_1 = require("../types/AFErrorOriginType");
const AFErrorType_1 = require("../types/AFErrorType");
class AFLockable extends AFObject_1.default {
    constructor() {
        super(...arguments);
        this.locked = false;
    }
    checkLock() {
        throw AFErrorStack_1.default.newWithMessageAndType(AFErrorOriginType_1.default.BackEnd, AFErrorType_1.default.LockedObjectManipulated, `Object '${this.constructor.name}' is locked and cannot be mutated.`).withGenericError();
    }
    lock() {
        this.locked = true;
    }
    unlock() {
        this.locked = false;
    }
    isLocked() {
        return this.locked;
    }
    isUnlocked() {
        return !this.locked;
    }
}
exports.default = AFLockable;
//# sourceMappingURL=AFLockable.js.map