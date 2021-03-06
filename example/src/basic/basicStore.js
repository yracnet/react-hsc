import { createStore } from 'react-hsc';
import { counterReducer } from './counterReducer';

export const basicStore = createStore({
    C1: [counterReducer, { counter: 0 }],
    // other reducers
    // NAME: [ fnReducer, initialState, fnInicializer]
});
