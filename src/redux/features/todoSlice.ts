import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type TTodo = {
    id: string;
    task: string;
    description: string;
}
type TInitialState = {
    todos: TTodo[]
}
const initialState: TInitialState = {
    todos: []
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TTodo>) =>{
            state.todos.push(action.payload);
        },
        removeTodo: (state, action: PayloadAction<string>) =>{
            const newTodos = state.todos.filter(todo => todo.id !== action.payload);
            state.todos = newTodos;
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;