import {createSlice, configureStore} from '@reduxjs/toolkit'

const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];

const todosSlice=createSlice({
    name:'todos',
    initialState:{
        todosList:savedTodos
    },
    reducers:{
        addTodo:(state, action)=>{
            state.todosList.push(
                {id: Date.now(), text:action.payload, completed:false}
            )
            localStorage.setItem('todos', JSON.stringify(state.todosList));
        },
        deleteTodo:(state,action)=>{
            state.todosList = state.todosList.filter((t)=> t.id !== action.payload)
            localStorage.setItem('todos', JSON.stringify(state.todosList));
        },
        toggleTodo:(state,action)=>{
            const todoState=state.todosList.find((t)=> t.id === action.payload)
            todoState.completed=!todoState.completed;
            localStorage.setItem('todos', JSON.stringify(state.todosList));
        }
    }
})

export const {addTodo, deleteTodo, toggleTodo, filterDone, filterNotDone} = todosSlice.actions

export const Store=configureStore({
    reducer:todosSlice.reducer
})