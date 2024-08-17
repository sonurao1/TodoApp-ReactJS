import {createContext , useContext} from "react"

export const TodoContext = createContext({
    todos: [
        
    ],
    addTodo : () => {},
    editTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleComepleted: (id) => {},

})


export const useTodo = ()=> {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;