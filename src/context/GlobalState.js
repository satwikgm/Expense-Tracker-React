import React , { createContext , useReducer } from 'react';
import AppReducer from "./AppReducer";

// Initaial state
const initialState = {
    transactions : []
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({children}) => {
    const [state , dispath] = useReducer(AppReducer , initialState);

    // Actions
    function deleteTransaction(id) {
        dispath({
            type: 'DELETE_TRANSACTION',
            payload : id
        }); 
    }

    function addTransaction(transaction) {
        dispath({
            type: 'ADD_TRANSACTION',
            payload : transaction
        }); 
    }

    return (
        <GlobalContext.Provider value={{
            transactions : state.transactions,
            deleteTransaction,
            addTransaction
        }} >
            {children}
        </GlobalContext.Provider>
    )
}