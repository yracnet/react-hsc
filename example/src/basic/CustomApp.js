import React, { createContext } from 'react'
import { useSelector, useDispatch } from 'react-hsc';

import { basicStore } from './basicStore';

const CustomStore = createContext();

export const BasicApp = () => {
    return (
        <CustomStore.Provider value={basicStore}>
            <CounterDisplay />
            <CounterButtons />
        </CustomStore.Provider>
    )
}

export const CounterDisplay = () => {
    let { counter } = useSelector(state => state.C1, CustomStore);
    return (
        <h3>Counter: {counter}</h3>
    )
}

export const CounterButtons = () => {
    const dispatch = useDispatch(CustomStore);
    const onClick = (type) => {
        const action = { type }
        dispatch(action)
    }
    return (
        <div>
            <button onClick={e => onClick("++")}>+1</button>
            <button onClick={e => onClick("--")}>-1</button>
        </div>
    )
}