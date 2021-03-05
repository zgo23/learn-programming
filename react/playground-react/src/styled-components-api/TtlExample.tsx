import React from "react";
import styled from "styled-components";

interface SectionProps {
    background: string;
}

const padding = "3em";
const Section = styled.section<SectionProps>`
    color: white;
    padding: ${padding};
    background: ${(props) => props.background};
    /* ${{ fontWeight: "bold", color: "red" }} */
    ${() => ({ fontWeight: "bold", color: "red" })}
`;

export default function TtlExample() {
    return <Section background="cornflowerblue">✨ Magic</Section>;
}
