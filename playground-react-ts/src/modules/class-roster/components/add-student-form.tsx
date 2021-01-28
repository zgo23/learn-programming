import React from "react";
import { AddStudentFormLayout, Button } from "./styled";

export default function AddClassmateForm() {
    return (
        <AddStudentFormLayout>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" />
            </div>
            <div>
                <label htmlFor="emailAddress">EMail address:</label>
                <input type="text" id="emailAddress" />
            </div>
            <div>
                <Button>OK</Button>
                <Button>Cancel</Button>
            </div>
        </AddStudentFormLayout>
    );
}
