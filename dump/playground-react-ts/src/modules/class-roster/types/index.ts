import { Action } from "redux";

export interface Student {
    id: number;
    name: string;
    emailAddress: string;
}

export type NewStudentInfo = Pick<Student, "name" | "emailAddress">;

export type StartEditingAction = Action<"StartEditing">;
export type EndEditingAction = Action<"EndEditing">;
export type OperateEditingAction = StartEditingAction | EndEditingAction;

export interface AddStudentAction extends Action<"AddStudent"> {
    payload: NewStudentInfo;
}

export interface EditStudentAction extends Action<"EditStudent"> {
    payload: Student;
}

export interface DeleteStudentAction extends Action<"DeleteStudent"> {
    payload: number;
}

export type OperateStudentAction =
    | AddStudentAction
    | EditStudentAction
    | DeleteStudentAction;

export type StoreState = {
    isEditing: boolean;
    students: Student[];
};

export type ClassRosterPropsFromStoreState = {
    isEditing: boolean;
    students: Student[];
};

export type ClassRosterPropsFromStoreDispatch = {
    startEditing: () => StartEditingAction;
    endEditing: () => EndEditingAction;
    addStudent: (newStudentInfo: NewStudentInfo) => AddStudentAction;
    editStudent: (student: Student) => EditStudentAction;
    deleteStudent: (studentId: number) => DeleteStudentAction;
};

export type ClassRosterProps = ClassRosterPropsFromStoreState &
    ClassRosterPropsFromStoreDispatch;
