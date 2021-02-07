import produce from "immer";

const todos = [
    {
        id: 1,
        text: "Learn Immer",
        done: false,
    },
    {
        id: 2,
        text: "Learn Reselect",
        done: false,
    },
];

const nextTodos = produce(todos, (draft) => {
    draft.push({ id: 3, text: "Learn Redux", done: false });
    draft[1].done = true;
});

console.log(todos.length);
console.log(todos[1].done);

console.log(nextTodos.length);
console.log(nextTodos[1].done);

console.log(todos === nextTodos);
console.log(todos[0] === nextTodos[0]);
console.log(todos[1] === nextTodos[1]);
