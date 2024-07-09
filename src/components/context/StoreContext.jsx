import React, { createContext } from 'react';
import { store_items } from '../assets/assets';

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {

    const contextValue = { store_items };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
