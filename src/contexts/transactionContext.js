import { createContext, useState } from "react";

const TransactionContext = createContext();

const TransactionProvider = ({children}) => {
    const [typeTransaction, setTypeTransaction] = useState(localStorage.getItem("type"));

    return (
        <TransactionContext.Provider value={{typeTransaction, setTypeTransaction}}>
            {children}
        </TransactionContext.Provider>
    );
};

export {
    TransactionContext, TransactionProvider
}