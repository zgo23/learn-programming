import React from "react";
import { StudentListItemLayout, Button } from "./styled";
import Student from "./student";

export default function ClassmateListItem() {
    return (
        <StudentListItemLayout>
            <Student />
            <Button>Edit</Button>
            <Button>Delete</Button>
        </StudentListItemLayout>
    );
}
