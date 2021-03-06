import React from 'react'
import { useSelector } from 'react-hsc';

export const CounterDisplay = () => {
    let { counter } = useSelector(state => state.C1);
    return (
        <h3>Counter: {counter}</h3>
    )
}