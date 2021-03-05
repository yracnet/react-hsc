import React, { useState } from 'react'
import BasicApp from './basic/BasicApp'
import CounterApp from './counter/CounterApp'
import TodoApp from './todo/TodoApp'

export const MainApp = () => {
    const [example, setExample] = useState('1')
    const onChange = (e) => {
        setExample(e.target.value);
    }
    return (
        <div>
            <select value={example} onChange={onChange}>
                <option value="1">Basic Example</option>
                <option value="2">Counter Example</option>
                <option value="3">To Do Example</option>
            </select>
            {example === '1' && <BasicApp />}
            {example === '2' && <CounterApp />}
            {example === '3' && <TodoApp />}
        </div>
    )
}
