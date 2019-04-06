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
const AFObject_1 = require("./AFObject");
class AFBinarySearchTree extends AFObject_1.default {
    constructor(objects, comparator) {
        super();
        this.comparator = comparator;
        if (!objects)
            throw new Error("Objects in AFBinarySearchTree constructor is undefined or null.");
        let checker = (node, object) => {
            let compared = this.comparator(node.data, object);
            if (compared > 0) {
                if (!node.leftNode) {
                    node.leftNode = new AFBinarySearchTreeNode(object);
                }
                else {
                    node.leftNode = checker(node.leftNode, object);
                }
            }
            else if (compared < 0) {
                if (!node.rightNode) {
                    node.rightNode = new AFBinarySearchTreeNode(object);
                }
                else {
                    node.rightNode = checker(node.rightNode, object);
                }
            }
            return node;
        };
        objects.forEach((object) => {
            if (!this.rootNode) {
                this.rootNode = new AFBinarySearchTreeNode(object);
            }
            else {
                this.rootNode = checker(this.rootNode, object);
            }
        });
    }
    print() {
        this.rootNode.print();
    }
}
exports.AFBinarySearchTree = AFBinarySearchTree;
class AFBinarySearchTreeNode extends AFObject_1.default {
    constructor(data) {
        super();
        this.data = data;
    }
    print() {
        console.group(this.data);
        if (this.leftNode)
            this.leftNode.print();
        if (this.rightNode)
            this.rightNode.print();
        console.groupEnd();
    }
}
exports.AFBinarySearchTreeNode = AFBinarySearchTreeNode;
//# sourceMappingURL=AFBinarySearchTree.js.map