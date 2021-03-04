
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

