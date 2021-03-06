import React from 'react'
import { useDispatch } from 'react-hsc';

export const CounterActions = () => {
    const dispatch = useDispatch();
    const onClickAsString = (type) => {
        console.log('string action');
        // convert string to {type: string}
        dispatch(type)
    }
    const onClickAsFunction = (type) => {
        const fnAction = () => {
            console.log('function action');
            // return: {type, payload}
            return { type }
        }
        dispatch(fnAction)
    }
    const onClickAsAsyncFunction = (type) => {
        dispatch(fnAsyncAction)
    }
    return (
        <div>
            <button onClick={e => onClickAsString("++")}>+1 as String</button>
            <button onClick={e => onClickAsFunction("++")}>+1 as Function</button>
            <button onClick={e => onClickAsAsyncFunction("++")}>+1 as Async Function</button>
        </div>
    )
}
async function fnAsyncAction(dispatchAsync)  {
    console.log('----dispatchAsync', dispatchAsync);
    setTimeout(
        () => {
            console.log('async function action');
            // param: {type, payload}
            dispatchAsync({ type: '++' });
        },
        3000
    );
}