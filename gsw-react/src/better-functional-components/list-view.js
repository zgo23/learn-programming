import React from "react";

export default function ListView({ title, items }) {
    return (
        <div>
            <h1>{title}</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
