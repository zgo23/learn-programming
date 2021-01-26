import { combineReducers } from "redux";
import { Student, OperateEditingAction, OperateStudentAction } from "../types";
import { getStudentId } from "../utils";

const reducer = combineReducers({
    isEditing: (
        isEditing: boolean = false,
        action: OperateEditingAction
    ): boolean => {
        switch (action.type) {
            case "StartEditing":
                return true;
            case "EndEditing":
                return false;
        }
        return false;
    },
    students: (students: Student[] = [], action: OperateStudentAction) => {
        switch (action.type) {
            case "AddStudent":
                const newStudentId = getStudentId();
                const newStudent = action.payload;
                return [
                    ...students,
                    {
                        id: newStudentId,
                        ...newStudent,
                    },
                ];
            case "EditStudent":
                const existingStudent = action.payload;
                return students.map((item) => {
                    if (existingStudent.id === item.id) {
                        return existingStudent;
                    } else {
                        return item;
                    }
                });
            case "DeleteStudent":
                const existingStudentId = action.payload;
                return students.filter((item) => {
                    return item.id !== existingStudentId;
                });
        }
        return students;
    },
});

export default reducer;
