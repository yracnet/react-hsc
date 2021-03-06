import { createContext, useContext, useEffect, useState } from 'react'
import { createStoreHandler } from './Handler';
import utils from './utils';

const StoreContext = createContext(createStoreHandler());

export default StoreContext;

// value = {key:args}|args
// args = [reducer, state, init]
export const createStore = (value) => {
    if (utils.isArray(value)) {
        value = { _default: value };
    }
    return createStoreHandler(value);
}

// selector = (S)=>S
// context = createContext instance
export const useSelector = (selector, context = StoreContext) => {
    const handler = useContext(context);
    const store = handler.getStore();
    const initialValue = selector(store);
    const [state, setState] = useState(initialValue);
    useEffect(() => {
        handler.addListener(selector, { state, setState });
        return () => handler.removeListener(selector);
    }, [selector, state, handler]);
    return state;
}

// context = createContext instance
export const useDispatch = (context = StoreContext) => {
    const handler = useContext(context);
    // action = string | {type: string} | function(dispatch)
    return (action) => {
        if (utils.isString(action)) {
            action = { type: action }
        } else if (utils.isFunction(action) || utils.isFunctionAsync(action)) {
            action = action(handler.callDispatch);
        }
        if (utils.isObject(action)) {
            handler.callDispatch(action);
        }
    };
}