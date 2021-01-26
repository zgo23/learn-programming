export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
function toNumber(l: ListNode): number {
    let num = 0;
    let currentNode = l;
    let exponent = 0;
    while (currentNode) {
        num += currentNode.val * Math.pow(10, exponent++);
        currentNode = currentNode.next;
    }
    return num;
}

function fromNumber(num: number): ListNode {
    const numStr = String(num);
    let headNode: ListNode = null;
    for (let i = 0; i < numStr.length; i++) {
        const digit = parseInt(numStr.charAt(i), 10);
        const node = new ListNode(digit);
        node.next = headNode;
        headNode = node;
    }
    return headNode;
}
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    const num1 = toNumber(l1);
    const num2 = toNumber(l2);
    const s = num1 + num2;
    return fromNumber(s);
}
// @lc code=end
export default addTwoNumbers;
export { toNumber, fromNumber };
