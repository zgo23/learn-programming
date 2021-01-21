import React, { useMemo } from "react";

/**
 * Memoize Data
 * @param {*} param0
 */
export default function SortedListView({ title, items, comparisonFunc }) {
    const sortedItems = useMemo(() => {
        const itemsCopy = [...items];
        itemsCopy.sort(comparisonFunc);
        return itemsCopy;
    }, [items, comparisonFunc]);
    return (
        <div>
            <h1>{title}</h1>
            <ul>
                {sortedItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
