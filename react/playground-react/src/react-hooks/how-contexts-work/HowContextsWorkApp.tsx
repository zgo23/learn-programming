import React from "react";
import ThemeContext from "./ThemeContext";
import Header from "./Header";

export default function HowContextsWorkApp() {
    return (
        <ThemeContext.Provider value={{ primaryColor: "coral" }}>
            <Header text="Hello World" />
            <ThemeContext.Provider value={{ primaryColor: "deepskyblue" }}>
                <Header text="This is a test" />
            </ThemeContext.Provider>
        </ThemeContext.Provider>
    );
}
