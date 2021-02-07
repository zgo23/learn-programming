import React, { useState, useRef, useEffect } from "react";
export default function Counter() {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef();
    useEffect(() => {
        prevCountRef.current = count;
    });
    const prevCount = prevCountRef.current;
    return (
        <div>
            <h1>
                Now: {count}, before: {prevCount}
            </h1>
            <button onClick={() => setCount(count + 1)}>Increase count</button>
        </div>
    );
}
