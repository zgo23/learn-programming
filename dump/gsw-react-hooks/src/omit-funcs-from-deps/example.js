import React, { useEffect } from "react";

export default function Example({ someProp }) {
    useEffect(() => {
        function doSomething() {
            console.log(someProp);
        }

        doSomething();
    }, [someProp]);

    return <div>Hello</div>;
}
