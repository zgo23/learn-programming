import React, { useCallback } from "react";
import type { FC } from "react";
import type { ListItemElement } from "./ListItem";

const List: FC = ({ children }) => {
    const handlerClick = useCallback((e) => {
        alert(`Click on: ${e.currentTarget.getAttribute("data-index")}`);
    }, []);

    return (
        <ul>
            {React.Children.map(children, (child, index) => {
                return React.cloneElement(child as ListItemElement, {
                    onClick: handlerClick,
                    "data-index": index,
                });
            })}
        </ul>
    );
};

export default List;
