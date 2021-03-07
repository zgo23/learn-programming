import React from "react";
// import StyledExample from "./styled-components-api/StyledExample";
// import TtlExample from "./styled-components-api/TtlExample";
// import MyName from "./react-hooks/basics/MyName";
// import MyName from "./react-hooks/basics/MyNameUseHook";
// import MyName from "./react-hooks/basics/MyNameUseSimulatedHook";
import { BlogApp } from "./react-hooks/blog";
import "./App.css";

function App() {
    return (
        <div className="App">
            {/* <StyledExample />
            <TtlExample /> */}
            {/* <MyName /> */}
            <BlogApp />
        </div>
    );
}

export default App;
