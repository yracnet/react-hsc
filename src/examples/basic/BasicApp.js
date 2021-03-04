import React from 'react'
import StoreContext from 'react-rsc';

import { basicStore } from './basicStore';
import { CounterDisplay } from './CounterDisplay';
import { CounterButtons } from './CounterButtons';

export const BasicApp = () => {
    return (
        <StoreContext.Provider value={basicStore}>
            <CounterDisplay />
            <CounterButtons />
        </StoreContext.Provider>
    )
}
