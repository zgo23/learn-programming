import { configureStore } from "@reduxjs/toolkit";
import counterReducer, {
    increment,
    decrement,
    incrementByAmount,
} from "../features/counter/counterSlice";

console.log(JSON.stringify(increment()));
console.log(JSON.stringify(decrement()));
console.log(JSON.stringify(incrementByAmount(5)));
const newState = counterReducer({ value: 10 }, increment());
console.log(JSON.stringify(newState));

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
});
