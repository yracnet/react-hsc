import React from 'react'
import { useSelector } from 'react-hsc'
import { TodoItem } from './TodoItem';

export const TodoList = () => {
    const todoList = useSelector(it => it.todoList);
    return (
        <ul className="todo-list">
            {todoList.map(it => (
                <li key={it.id}>
                    <TodoItem todo={it}/>
                </li>
            ))}
        </ul>
    )
}
