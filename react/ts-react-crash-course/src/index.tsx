import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import { App } from "./App";
import { UserList } from "./UserList";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={(props) => (
                            <App userType="admin" username="h4x0r" {...props} />
                        )}
                    />
                </Switch>
                <Switch>
                    <Route
                        exact
                        path="/userList"
                        render={(props) => <UserList {...props} />}
                    />
                </Switch>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
