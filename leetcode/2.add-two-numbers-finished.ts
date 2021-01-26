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
type Pointer = {
    l1CurrentNode: ListNode;
    l2CurrentNode: ListNode;
    carry: number;
};
function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    const p: Pointer = {
        l1CurrentNode: l1,
        l2CurrentNode: l2,
        carry: 0,
    };
    const sumList = new ListNode();
    let slCurrentNode: ListNode = null;
    while (p.l1CurrentNode || p.l2CurrentNode) {
        if (!slCurrentNode) {
            slCurrentNode = sumList;
        } else {
            slCurrentNode.next = new ListNode();
            slCurrentNode = slCurrentNode.next;
        }
        const augendDigit = p.l1CurrentNode?.val ?? 0;
        const addendDigit = p.l2CurrentNode?.val ?? 0;
        const digitSum = augendDigit + addendDigit + p.carry;
        const sumDigit = digitSum % 10;
        slCurrentNode.val = sumDigit;

        p.l1CurrentNode = p.l1CurrentNode?.next;
        p.l2CurrentNode = p.l2CurrentNode?.next;
        p.carry = Math.floor(digitSum / 10);
    }
    if (p.carry !== 0) {
        slCurrentNode.next = new ListNode(p.carry);
        slCurrentNode = slCurrentNode.next;
    }

    return sumList;
}
// @lc code=end
export default addTwoNumbers;
export function fromArray(array: number[]): ListNode {
    let headNode: ListNode = null;
    for (let i = array.length - 1; i > -1; i--) {
        const node = new ListNode(array[i], headNode);
        headNode = node;
    }
    return headNode;
}

export function toArray(l: ListNode): number[] {
    const array = [];
    let currentNode = l;
    while (currentNode) {
        array.push(currentNode.val);
        currentNode = currentNode.next;
    }
    return array;
}
