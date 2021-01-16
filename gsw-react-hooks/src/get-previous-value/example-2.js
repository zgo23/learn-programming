import React, { useState } from "react";
import usePrevious from "./use-previous";
export default function Counter() {
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);
    return (
        <div>
            <h1>
                Now: {count}, before: {prevCount ?? "undefined"}
            </h1>
            <button onClick={() => setCount(count + 1)}>Increase count</button>
        </div>
    );
}
