import React, { useState, useEffect, useRef } from "react";

export default function A(props: {}) {
    const [reversed, setReversed] = useState(false);
    // const children = reversed ? [<C />, <B />] : [<B />, <C />];
    useTracking("A");
    return (
        <div>
            <button onClick={() => setReversed(!reversed)}>Reverse</button>
            {/* {children} */}
            {/* render without keys, value in inputs are lost */}
            {/* {!reversed ? <B /> : <C />} */}
            {/* {!reversed ? <C /> : <B />} */}
            {/* render with keys, no problem */}
            {!reversed ? <B key="B" /> : <C key="C" />}
            {!reversed ? <C key="C" /> : <B key="B" />}
        </div>
    );
}

function B(props: {}) {
    useTracking("B");
    return (
        <div>
            <label htmlFor="inputB">Input B</label>
            <input id="inputB" />
        </div>
    );
}

function C(props: {}) {
    useTracking("C");
    return (
        <div>
            <label htmlFor="inputC">Input C</label>
            <input id="inputC" />
        </div>
    );
}

function useTracking(componentName: string): void {
    const isInitialMount = useRef(true);
    useEffect(() => {
        console.log(`${componentName} mounted`);
        return () => {
            console.log(`${componentName} unmounted`);
        };
    }, [componentName]);
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            console.log(`${componentName} updated`);
        }
    });
}
