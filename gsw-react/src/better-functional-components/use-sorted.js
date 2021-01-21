import { useState, useMemo } from "react";

const ascendingFn = (a, b) => a - b;
const descendingFn = (a, b) => b - a;

export default function useSorted(initialIsAscending, items) {
    const [isAscending, setIsAscending] = useState(initialIsAscending);
    const comparisonFunc = isAscending ? ascendingFn : descendingFn;
    const sortedItems = useMemo(() => {
        const itemsCopy = [...items];
        itemsCopy.sort(comparisonFunc);
        return itemsCopy;
    }, [items, comparisonFunc]);
    return { isAscending, setIsAscending, sortedItems };
}
