import addTwoNumbers, {
    ListNode,
    fromArray,
    toArray,
} from "./2.add-two-numbers-low-perf";

describe("convert an array to a linked list", () => {
    test("[0] to 0", () => {
        const l: ListNode = fromArray([0]);
        expect(l.val).toBe(0);
        expect(l.next).toBeNull();
    });

    test("[2, 4, 3] to 2 > 4 > 3", () => {
        const l: ListNode = fromArray([2, 4, 3]);
        expect(l.val).toBe(2);
        expect(l.next.val).toBe(4);
        expect(l.next.next.val).toBe(3);
        expect(l.next.next.next).toBeNull();
    });
});

describe("convert a linked list to an array", () => {
    test("0 to [0]", () => {
        const array = [0];
        const l: ListNode = fromArray(array);
        expect(toArray(l)).toEqual(array);
    });
    test("2 > 4 > 3 to [2, 4, 3]", () => {
        const array = [2, 4, 3];
        const l: ListNode = fromArray(array);
        expect(toArray(l)).toEqual(array);
    });
});

describe("Add two numbers", () => {
    test("Example 1", () => {
        const l1 = fromArray([2, 4, 3]);
        const l2 = fromArray([5, 6, 4]);
        const s = addTwoNumbers(l1, l2);
        expect(toArray(s)).toEqual([7, 0, 8]);
    });
    test("Example 2", () => {
        const l1 = new ListNode(0, null);
        const l2 = new ListNode(0, null);
        const s = addTwoNumbers(l1, l2);
        expect(toArray(s)).toEqual([0]);
    });

    test("Example 3", () => {
        const l1 = fromArray([9, 9, 9, 9, 9, 9, 9]);
        const l2 = fromArray([9, 9, 9, 9]);
        const s = addTwoNumbers(l1, l2);
        expect(toArray(s)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
    });

    test("case 1566", () => {
        const l1 = fromArray([
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
        ]);
        const l2 = fromArray([5, 6, 4]);
        const s = addTwoNumbers(l1, l2);
        expect(toArray(s)).toEqual([
            6,
            6,
            4,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
        ]);
    });
});
