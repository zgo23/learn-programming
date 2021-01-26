import {
    Student,
    NewStudentInfo,
    EndEditingAction,
    StartEditingAction,
    AddStudentAction,
    EditStudentAction,
    DeleteStudentAction,
} from "../types";

export function startEditing(): StartEditingAction {
    return {
        type: "StartEditing",
    };
}

export function endEditing(): EndEditingAction {
    return {
        type: "EndEditing",
    };
}

export function addStudent(newStudentInfo: NewStudentInfo): AddStudentAction {
    return {
        type: "AddStudent",
        payload: newStudentInfo,
    };
}

export function editStudent(student: Student): EditStudentAction {
    return {
        type: "EditStudent",
        payload: student,
    };
}

export function deleteStudent(studentId: number): DeleteStudentAction {
    return {
        type: "DeleteStudent",
        payload: studentId,
    };
}
