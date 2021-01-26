import twoSum from "./1.two-sum";
describe("Two Sum", () => {
    test("Example 1", () => {
        const result = twoSum([2, 7, 11, 15], 9);
        expect(result.length).toEqual(2);
        expect(result).toContain(0);
        expect(result).toContain(1);
    });

    test("Example 2", () => {
        const result = twoSum([3, 2, 4], 6);
        expect(result.length).toEqual(2);
        expect(result).toContain(1);
        expect(result).toContain(2);
    });

    test("Example 3", () => {
        const result = twoSum([3, 3], 6);
        expect(result.length).toEqual(2);
        expect(result).toContain(0), expect(result).toContain(1);
    });
});
