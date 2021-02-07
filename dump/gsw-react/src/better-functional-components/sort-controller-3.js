import React, { useState, useCallback } from "react";
import ListView from "./list-view";
import useSorted from "./use-sorted";

/**
 * Create and Reuse Custom Hooks
 * @param {*} param0
 */
export default function SortController({ items }) {
    const [title, setTitle] = useState("");
    const { isAscending, setIsAscending, sortedItems } = useSorted(true, items);
    const getButtonStyle = useCallback(
        (buttonIsAscending) => {
            return buttonIsAscending === isAscending
                ? {
                      backgroundColor: "green",
                      color: "white",
                  }
                : {
                      all: "reset",
                  };
        },
        [isAscending]
    );
    return (
        <div>
            <input
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button
                onClick={() => setIsAscending(true)}
                style={getButtonStyle(true)}
            >
                Sort Ascending
            </button>
            <button
                onClick={() => setIsAscending(false)}
                style={getButtonStyle(false)}
            >
                Sort Descending
            </button>
            <ListView title={title} items={sortedItems} />
        </div>
    );
}
