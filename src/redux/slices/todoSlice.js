import { createSlice, nanoid } from "@reduxjs/toolkit";

// REDUX TOOLKIT - MUTATE STATE

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todos', /* devtools -type:"todos/addTodo" */
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // create a todo
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions //exporting each method which are there in reducer

export default todoSlice.reducer //exporting the entire reducer , to wire up with store