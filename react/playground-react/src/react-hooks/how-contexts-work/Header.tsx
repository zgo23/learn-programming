import React from "react";
import ThemeContext from "./ThemeContext";

interface HeaderProps {
    text: string;
}
const Header = ({ text }: HeaderProps) => (
    <ThemeContext.Consumer>
        {(theme) => <h1 style={{ color: theme.primaryColor }}>{text}</h1>}
    </ThemeContext.Consumer>
);

export default Header;
