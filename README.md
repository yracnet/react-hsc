:basic: src/examples/basic

# React-RSC

## React Reducer Store Context

It is a simple library **Reducer Store Context** for react application, using hooks.


## Installation

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

1. **useDispatch** functionality triggers an action that will be sent to the declared REDUCERS, this method supports parameters like **STRING | ACTION | FUNCTION | ASYNC FUNCTION**.


---
**NOTE**

Additionally, the connection functionality to the **REDUX-DEV-TOOLS** plugin was included to see the change of state managed by the library. 

---


## Documentation

The React-RSC docs are available at **https://yracnet.github.io/react-rsc/**.

