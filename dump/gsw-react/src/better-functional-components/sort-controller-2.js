import React, { useState } from "react";
import SortedListView from "./sorted-list-view";

const ascendingFn = (a, b) => a - b;
const descendingFn = (a, b) => b - a;

/**
 * Decouple Functions That Don’t Rely on the Component
 * @param {*} param0
 */
export default function SortController({ items }) {
    const [isAscending, setIsAscending] = useState(true);
    const [title, setTitle] = useState("");

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
