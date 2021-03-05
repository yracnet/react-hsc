import React, { useState } from 'react'
import { useDispatch } from 'react-rsc'

const init = { name: '', description: '' }

export const TodoForm = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState(init)
    const onChange = (e) => {
        let { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }
    const onClick = () => {
        let payload = { ...form, id: createId() }
        dispatch({ type: '[TODO]-ADD', payload });
        setForm(init);
    }
    return (
        <div className="todo-form">
            <label>Name:</label>
            <input name="name" onChange={onChange} value={form.name} />
            <label>Description:</label>
            <input name="description" onChange={onChange} value={form.description} />
            <button onClick={onClick}>Adicionar</button>
        </div>
    )
}
function createId() {
    let d = new Date();
    return 'R' + d.valueOf();
}
