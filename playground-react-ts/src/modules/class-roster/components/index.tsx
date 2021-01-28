import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import ClassRoster from "./class-roster";
import reducer from "../reducers";
import { StoreState, ClassRosterPropsFromStoreState } from "../types";
import {
    startEditing,
    endEditing,
    addStudent,
    editStudent,
    deleteStudent,
} from "../action-creators";

const store = createStore(reducer);
const mapStateToProps = (state: StoreState): ClassRosterPropsFromStoreState => {
    const { isEditing, students } = state;
    return {
        isEditing,
        students,
    };
};
const mapDispatchToProps = {
    startEditing,
    endEditing,
    addStudent,
    editStudent,
    deleteStudent,
};
const ConnectedClassRoster = connect(
    mapStateToProps,
    mapDispatchToProps
)(ClassRoster);

export default function ClassRosterApp() {
    return (
        <Provider store={store}>
            <ConnectedClassRoster />
        </Provider>
    );
}
