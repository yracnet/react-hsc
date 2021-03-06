
import devTools from "./DevTools";
import utils from "./utils";


export const createStoreHandler = function (value = {}) {
    let instance = {
        keys: [],
        store: {},
        reducer: {},
        listener: new Map()
    };
    instance.keys = Object.keys(value);

    // Create Initial State and Reducer
    instance.keys.forEach(name => {
        let [fnReducer, initialState, fnInitializer] = value[name];
        instance.store[name] = fnInitializer ? fnInitializer(initialState) : initialState || {};
        instance.reducer[name] = fnReducer;
    });
    devTools.init(instance.store);
    // Create Handler Context
    const handler = {
        getStore: () => {
            return { ...instance.store };
        },
        addListener: (key, hook) => {
            instance.listener.set(key, hook);
        },
        removeListener: (key) => {
            instance.listener.delete(key);
        },
        callListener: (newStore) => {
            const oldStore = handler.getStore();
            if (newStore !== oldStore) {
                instance.store = newStore;
                instance.listener.forEach((hook, fnSelector) => {
                    const state = fnSelector(newStore);
                    if (hook.state !== state) {
                        hook.setState(state);
                        hook.state = state;
                    }
                })
            }
        },
        callDispatch: (action) => {
            const newStore = handler.getStore();
            instance.keys.forEach(name => {
                const reducer = instance.reducer[name];
                const stateA = newStore[name];
                const stateB = reducer(stateA, action);
                if (!utils.compareValue(stateA, stateB)) {
                    newStore[name] = stateB;
                }
            });
            handler.callListener(newStore);
            let type = action.type || '????';
            devTools.send(type, newStore);
        }
    };
    return handler;
}