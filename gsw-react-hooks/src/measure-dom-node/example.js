import React, { useState, useCallback } from "react";

export default function MeasureExample() {
    const [height, setHeight] = useState(0);
    const measureRef = useCallback((node) => {
        if (node !== null) {
            setHeight(node.getBoundingClientRect().height);
        }
    }, []);
    return (
        <>
            <h1 ref={measureRef}>Hello, world</h1>
            <h2>The above header is {Math.round(height)}px tall</h2>
        </>
    );
}
