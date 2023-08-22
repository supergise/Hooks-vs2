import { useEffect, useReducer } from "react";
import { todoReducer, TodoList, TodoAdd } from "./";

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: "Recolectar la piedra del alma",
    //     done: false,
    // },
];

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init); // todos es el state y el dispatch despacha el todo

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos) || []);
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: "[TODO] Add Todo",
            payload: todo,
        };
        dispatch(action);
    };

    const handleDeleteTodo = (id) => {
        dispatch({
            type: "[TODO] Remove Todo",
            payload: id,
        });
    };

    return (
        <>
            <h1>
                TodoApp 10 <small>pendientes: 2</small>
            </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    );
};
