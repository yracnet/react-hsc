# React-RSC

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-rsc.svg)](https://www.npmjs.com/package/react-rsc) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)



## CodeSandbox Basic Example

[![Edit codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-rsc-001-t7g80)


## Install

React RSC is available as a package on NPM for use with a module in your React application:

```bash
# NPM
npm install react-rsc

# Yarn
yarn add react-rsc
```


## Purpose

The Redux RSC package is intended to be a simple alternative to REDUX for handling APPLICATION STATUS. It was originally created to understand the handling of REACT's useContext.

1. **StoreContext** is a default component context.

1. **createStore** functionality handles declared reducers, similar to REDUX's combineReducers.

1. **useSelector** functionality manages access to the ROOT-STATE similar to REDUX's useSelector.

1. **useDispatch** functionality triggers an action that will be sent to the declared REDUCERS, this method supports parameters like **STRING, ACTION, FUNCTION, ASYNC FUNCTION**.

---
**NOTE**

Additionally, the connection functionality to the **REDUX-DEV-TOOLS** plugin was included to see the change of state managed by the library. 

---


## Usage

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import StoreContext, { createStore, useSelector, useDispatch } from 'react-rsc'

// 1.- Reducer Function
export const counterReducer = (state, action) => {
    switch (action.type) {
        case '++':
            return { counter: state.counter + 1 };
        case '--':
            return { counter: state.counter - 1 };
        default:
            return state;
    }
}

// 2.- RSC Store
export const basicStore = createStore({
    C1: [counterReducer, { counter: 0 }],
});

// 3.- Basic App with StoreContext
export const BasicApp = () => {
    return (
        <StoreContext.Provider value={basicStore}>
            <CounterDisplay />
            <CounterButtons />
        </StoreContext.Provider>
    )
}

// 4.- useSelector Example
export const CounterDisplay = () => {
    let { counter } = useSelector(state => state.C1);
    return (
        <h3>Counter: {counter}</h3>
    )
}

// 5.- useDispatch Example
export const CounterButtons = () => {
    const dispatch = useDispatch();
    const onClick = (type) => {
        dispatch({ type })
    }
    return (
        <div>
            <button onClick={e => onClick("++")}>+1</button>
            <button onClick={e => onClick("--")}>-1</button>
        </div>
    )
}

// 6.- Run Example
ReactDOM.render(<BasicApp />, document.getElementById('root'))
```


## Documentation

The React-RSC docs are available at **https://yracnet.github.io/react-rsc/manual.html**.

## Example

The React-RSC docs are available at **https://yracnet.github.io/react-rsc/index.html**.



## License

MIT © [Willyams Yujra](https://github.com/yracnet)
