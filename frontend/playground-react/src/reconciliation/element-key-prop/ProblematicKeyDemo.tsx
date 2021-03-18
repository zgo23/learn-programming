import React from "react";

interface Task {
    id: number;
    createdAt: Date;
}

type ToDoProps = Task;

const ToDo = (props: ToDoProps) => (
    <tr>
        <td>
            <label>{props.id}</label>
        </td>
        <td>
            <input />
        </td>
        <td>
            <label>{props.createdAt.toTimeString()}</label>
        </td>
    </tr>
);

interface ToDoListState {
    todoCounter: number;
    list: Task[];
}

export default class ToDoList extends React.Component<{}, ToDoListState> {
    constructor(props: {}) {
        super(props);
        const date = new Date();
        const todoCounter = 1;
        this.state = {
            todoCounter: todoCounter,
            list: [
                {
                    id: todoCounter,
                    createdAt: date,
                },
            ],
        };
    }
    sortByEarliest() {
        const nextList = [...this.state.list];
        nextList.sort((a, b) => {
            return a.createdAt.valueOf() - b.createdAt.valueOf();
        });
        this.setState({ list: nextList });
    }
    sortByLatest() {
        const nextList = [...this.state.list];
        nextList.sort((a, b) => {
            return b.createdAt.valueOf() - a.createdAt.valueOf();
        });
        this.setState({ list: nextList });
    }
    addToEnd() {
        const date = new Date();
        const nextId = this.state.todoCounter + 1;
        const nextList = [
            ...this.state.list,
            {
                id: nextId,
                createdAt: date,
            },
        ];
        this.setState({
            todoCounter: nextId,
            list: nextList,
        });
    }
    addToStart() {
        const date = new Date();
        const nextId = this.state.todoCounter + 1;
        const nextList = [{ id: nextId, createdAt: date }, ...this.state.list];
        this.setState({
            todoCounter: nextId,
            list: nextList,
        });
    }

    render() {
        return (
            <div>
                <code>key=index</code>
                <br />
                <button onClick={this.addToStart.bind(this)}>
                    Add New to Start
                </button>
                <button onClick={this.addToEnd.bind(this)}>
                    Add New to End
                </button>
                <button onClick={this.sortByEarliest.bind(this)}>
                    Sort by Earliest
                </button>
                <button onClick={this.sortByLatest.bind(this)}>
                    Sort by Latest
                </button>
                <table>
                    <tr>
                        <th>ID</th>
                        <th />
                        <th>Created At</th>
                    </tr>
                    {this.state.list.map((todo, index) => (
                        <ToDo key={index} {...todo} />
                    ))}
                </table>
            </div>
        );
    }
}
