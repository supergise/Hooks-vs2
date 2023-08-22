const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false, 
}];

const todoReducer = (state = initialState, action = {}) => {

    if (action.type === '[TODO] add todo') {
        return [...state, action.payload];
    }
    return state; // siempre devuelve un estado
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false,
}

// la accion se vería así

const addTodoAction = {
    type: '[TODO] add todo', // es un simple string que avisa cual es la acción
    payload: newTodo, //  es igual a newTodo: newTodo. Es el contenido de la acción
}


todos = todoReducer(todos, addTodoAction);


console.log({todos});



// EN REACT NO HACER MUTACIONES por ejemplo .push