import React from 'react'
import StoreContext, { createStore } from '../../module';
import './TodoApp.css'
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';


const todoListReducer = (state, action) => {
    switch (action.type) {
        case '[TODO]-ADD':
            let it = action.payload;
            return [...state, it]
        case '[TODO]-DEL':
            const id = action.payload;
            return state.filter(it => it.id !== id);
        default:
            return state;
    }
}


const appStore = createStore({
    todoList: [todoListReducer, []]
});

const TodoApp = () => {
    return (
        <StoreContext.Provider value={appStore}>
            <div className="todo">
                <TodoForm />
                <TodoList />
            </div>
        </StoreContext.Provider>
    )
}

export default TodoApp;