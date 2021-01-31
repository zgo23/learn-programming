interface Action<T = any> {
    type: T;
}
interface AnyAction extends Action {
    [extraProps: string]: any;
}
type Reducer<S = any, A extends Action = AnyAction> = (
    state: S | undefined,
    action: A
) => S;

const ADD_STUDENT = "ADD_STUDENT";

interface Student {
    id: number;
    name: string;
    emailAddress: string;
}
interface AddStudentAction extends Action<typeof ADD_STUDENT> {
    payload: Student;
}
type ClassRosterState = {
    students: Student[];
};
const initialState: ClassRosterState = {
    students: [],
};
const r: Reducer<ClassRosterState, AddStudentAction> = function (
    state = initialState,
    action
) {
    switch (action.type) {
        case ADD_STUDENT:
            return {
                students: [...state.students, action.payload],
            };
        default:
            return state;
    }
};
// const s = r(undefined, {
//     type: 'init'
// })
const s = r(undefined, {
    type: ADD_STUDENT,
    payload: {
        id: 1,
        name: "Matthew Gong",
        emailAddress: "matthew.zhigang.gong@gmail.com",
    },
});
console.log(JSON.stringify(s));
