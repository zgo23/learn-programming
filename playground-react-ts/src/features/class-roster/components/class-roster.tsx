import React, { FC } from "react";
import { ClassRosterLayout, Button } from "./styled";
import AddStudentForm from "./add-student-form";
import ClassmateList from "./student-list";
import { ClassRosterProps } from "../types";

const ClassRoster: FC<ClassRosterProps> = ({
    isEditing,
    students,
    startEditing,
}) => {
    return (
        <ClassRosterLayout>
            {isEditing ? (
                <AddStudentForm />
            ) : (
                <Button onClick={startEditing}>Add a student</Button>
            )}

            <ClassmateList />
        </ClassRosterLayout>
    );
};

export default ClassRoster;
