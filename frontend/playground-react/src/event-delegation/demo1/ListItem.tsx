import React, { MouseEventHandler } from "react";
import type { FC, ReactElement } from "react";

interface ListItemProps {
    onClick?: MouseEventHandler;
    "data-index"?: number;
}

const ListItem: FC<ListItemProps> = ({ children, ...other }) => {
    return <li {...other}>{children}</li>;
};

export default ListItem;

export type ListItemElement = ReactElement<ListItemProps, typeof ListItem>;
