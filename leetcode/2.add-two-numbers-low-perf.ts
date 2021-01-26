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
function fromArray(array: number[]): ListNode {
    let headNode: ListNode = null;
    for (let i = array.length - 1; i > -1; i--) {
        const node = new ListNode(array[i], headNode);
        headNode = node;
    }
    return headNode;
}

function toArray(l: ListNode): number[] {
    const array = [];
    let currentNode = l;
    while (currentNode) {
        array.push(currentNode.val);
        currentNode = currentNode.next;
    }
    return array;
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
    const array1 = toArray(l1);
    const array2 = toArray(l2);
    const augend = array1.length >= array2.length ? array1 : array2;
    const addend = array1.length >= array2.length ? array2 : array1;
    const sum = [];
    let carry = 0;
    for (let i = 0; i < augend.length; i++) {
        const augendDigit = augend[i];
        const addendDigit = i in addend ? addend[i] : 0;
        const digitSum = augendDigit + addendDigit + carry;
        const sumDigit = digitSum % 10;
        carry = Math.floor(digitSum / 10);
        sum.push(sumDigit);
    }
    if (carry !== 0) {
        sum.push(carry);
    }

    return fromArray(sum);
}
// @lc code=end
export default addTwoNumbers;
export { fromArray, toArray };
