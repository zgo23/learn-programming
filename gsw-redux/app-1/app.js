import { createStore } from "redux";
import reducer from "./reducers";
const store = createStore(reducer);
// const store = createStore(reducer, { todos: ["Learn Redux"], counter: 2 });
// console.log(store.getState());
