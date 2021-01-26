import React from "react";
import { StudentListLayout } from "./styled";
import StudentListItem from "./student-list-item";

export default function ClassmateList() {
    return (
        <StudentListLayout>
            <StudentListItem />
            <StudentListItem />
            <StudentListItem />
            <StudentListItem />
            <StudentListItem />
        </StudentListLayout>
    );
}
