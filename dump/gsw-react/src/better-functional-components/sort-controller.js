import React, { useState, useCallback } from "react";
import SortedListView from "./sorted-list-view";

/**
 * Memoize Callback Functions
 * @param {*} param0
 */
export default function SortController({ items }) {
    const [isAscending, setIsAscending] = useState(true);
    const [title, setTitle] = useState("");
    const ascendingFn = useCallback((a, b) => a - b, []);
    const descendingFn = useCallback((a, b) => b - a, []);
    const comparisonFunc = isAscending ? ascendingFn : descendingFn;
    return (
        <div>
            <input
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={() => setIsAscending(true)}>Sort Ascending</button>
            <button onClick={() => setIsAscending(false)}>
                Sort Descending
            </button>
            <SortedListView
                title={title}
                items={items}
                comparisonFunc={comparisonFunc}
            />
        </div>
    );
}
