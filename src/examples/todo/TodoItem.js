import React from 'react'
import { useDispatch } from '../../module'

export const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch({ type: '[TODO]-DEL', payload: todo.id });
    }
    return (
        <div>
            <b>{todo.name}</b>
            <sup>{todo.id}</sup>
            <sub>* {todo.description}</sub>
            <button onClick={onClick}>Eliminar</button>
        </div>
    )
}
