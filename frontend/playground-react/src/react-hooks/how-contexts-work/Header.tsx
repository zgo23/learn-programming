import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

interface HeaderProps {
    text: string;
}
const Header = ({ text }: HeaderProps) => {
    const theme = useContext(ThemeContext);
    return <h1 style={{ color: theme.primaryColor }}>{text}</h1>;
};

export default Header;
