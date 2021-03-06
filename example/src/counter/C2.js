import React from 'react'
import { useDispatch, useSelector } from 'react-hsc';

export const C2 = ({ name = 'C2' }) => {
    console.log('C2');
    return (
        <div className="counter-item">
            <C2Output name={name} />
            <div className="buttoms">
                <C2BtnIncrement name={name} />
                <C2BtnDecrement name={name} />
            </div>
            <sub>Render Time: {new Date().getTime()}</sub>
        </div>
    )
}


const C2Output = ({ name }) => {
    console.log('C2Output');
    const { counter } = useSelector(state => state[name]);
    return (
        <h4>
            Count: {counter}
            <sub>Render Time: {new Date().getTime()}</sub>
        </h4>
    )
}
const C2BtnIncrement = ({ name }) => {
    console.log('C2BtnIncrement');
    const dispatch = useDispatch();
    const onClick = () => {
        console.log('C2BtnIncrement-onClick');
        dispatch({ type: name + '+' });
    }
    const onClickFunction = () => {
        console.log('C2BtnIncrement-onClickFunction');
        dispatch(() => ({ type: name + '+' }));
    }
    const onClickAsync = () => {
        console.log('C2BtnIncrement-onClickAsync');
        let fnAsync = async (delegateDispatch) =>
            setTimeout(() => {
                delegateDispatch({ type: name + '+' })
            }, 2000)
        dispatch(fnAsync)
    }
    const onClickString = () => {
        console.log('C2BtnIncrement-onClickString');
        dispatch(name + '+')
    }
    return (
        <div>
            <button onClick={onClick}>
                + {name}
            </button>
            <button onClick={onClickFunction}>
                + {name} as function
            </button>
            <button onClick={onClickAsync}>
                + {name} as async
            </button>
            <button onClick={onClickString}>
                + {name} as string
            </button>
            <sub>Render Time: {new Date().getTime()}</sub>
        </div>
    )
}

const C2BtnDecrement = ({ name }) => {
    console.log('C2BtnDecrement');
    const dispatch = useDispatch();
    const onClick = () => {
        console.log('C2BtnDecrement-onClick');
        dispatch({ type: name + '-' });
    }
    return (
        <div>
            <button onClick={onClick}>
                - {name}
            </button>
            <sub>Render Time: {new Date().getTime()}</sub>
        </div>
    )
}
