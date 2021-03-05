import React from 'react'
import { useDispatch, useSelector } from 'react-rsc';

export const C1 = () => {
    console.log('C1');
    return (
        <div className="counter-item">
            <C1Output />
            <div className="buttoms">
                <C1BtnIncrement />
                <C1BtnDecrement />
            </div>
        </div>
    )
}


const C1Output = () => {
    console.log('C1Output');
    const { counter } = useSelector(state => state.C1);
    return (
        <h4>
            Count: {counter}
            <sub>Render Time: {new Date().getTime()}</sub>
        </h4>
    )
}
const C1BtnIncrement = () => {
    console.log('C1BtnIncrement');
    const dispatch = useDispatch();
    const onClick = () => {
        console.log('C1BtnIncrement-onClick');
        dispatch({ type: 'C1+' });
    }
    return (
        <button onClick={onClick}>
            +1
        </button>
    )
}
const C1BtnDecrement = () => {
    console.log('C1BtnDecrement');
    const dispatch = useDispatch();
    const onClick = () => {
        console.log('C1BtnDecrement-onClick');
        dispatch({ type: 'C1-' });
    }
    return (
        <button onClick={onClick}>
            -1
        </button>
    )
}
