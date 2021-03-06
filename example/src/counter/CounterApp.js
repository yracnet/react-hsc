
import React from 'react'
import StoreContext, { createStore } from 'react-hsc';
import './CounterApp.css';
import { C1 } from './C1';
import { C2 } from './C2';

const counterReducer1 = (state, action) => {
  switch (action.type) {
    case 'C1+':
      return { counter: state.counter + 1 };
    case 'C1-':
      return { counter: state.counter - 1 };
    default:
      return state;
  }
}

const counterReducer2 = (state, action) => {
  switch (action.type) {
    case 'C2+':
      return { counter: state.counter + 2 };
    case 'C2-':
      return { counter: state.counter - 2 };
    default:
      return state;
  }
}

const counterReducer3 = (state, action) => {
  switch (action.type) {
    case 'C3+':
      return { counter: state.counter + 3 };
    case 'C3-':
      return { counter: state.counter - 3 };
    default:
      return state;
  }
}


const appStore = createStore({
  C1: [counterReducer1, { counter: 10 }, it => it],
  C2: [counterReducer2, { counter: 20 }, it => it],
  C3: [counterReducer3, { counter: 30 }, it => it]
});



function CounterApp() {
  return (
    <StoreContext.Provider value={appStore}>
      <div className="counter">
        <C1 />
        <C2 />
        <C2 name="C3" />
      </div>
    </StoreContext.Provider>
  );
}

export default CounterApp;