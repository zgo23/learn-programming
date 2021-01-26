import addTwoNumbers, {
    ListNode,
    toNumber,
    fromNumber,
} from "./2.add-two-numbers_1565_1568";

describe("convert a number to a linked list", () => {
    test("0 to 0", () => {
        const l: ListNode = fromNumber(0);
        expect(l.val).toBe(0);
        expect(l.next).toBeNull();
    });
    test("123 to 3 > 2 > 1", () => {
        const l: ListNode = fromNumber(123);
        expect(l.val).toBe(3);
        expect(l.next.val).toBe(2);
        expect(l.next.next.val).toBe(1);
        expect(l.next.next.next).toBeNull();
    });
});

describe("Convert a linked list to a number", () => {
    test("0 to 0", () => {
        const l: ListNode = new ListNode(0, null);
        expect(toNumber(l)).toBe(0);
    });
    test("3 > 2 > 1 to 123", () => {
        const l: ListNode = new ListNode(
            3,
            new ListNode(2, new ListNode(1, null))
        );
        expect(toNumber(l)).toBe(123);
    });
});

describe("Add two numbers", () => {
    test("Example 1", () => {
        const l1 = new ListNode(2, new ListNode(4, new ListNode(3, null)));
        const l2 = new ListNode(5, new ListNode(6, new ListNode(4, null)));
        const s = addTwoNumbers(l1, l2);
        expect(toNumber(s)).toBe(807);
    });
    test("Example 2", () => {
        const l1 = new ListNode(0, null);
        const l2 = new ListNode(0, null);
        const s = addTwoNumbers(l1, l2);
        expect(toNumber(s)).toBe(0);
    });

    test("Example 3", () => {
        const l1 = new ListNode(
            9,
            new ListNode(
                9,
                new ListNode(
                    9,
                    new ListNode(
                        9,
                        new ListNode(9, new ListNode(9, new ListNode(9, null)))
                    )
                )
            )
        );
        const l2 = new ListNode(
            9,
            new ListNode(9, new ListNode(9, new ListNode(9, null)))
        );
        const s = addTwoNumbers(l1, l2);
        expect(toNumber(s)).toBe(10009998);
    });
});
