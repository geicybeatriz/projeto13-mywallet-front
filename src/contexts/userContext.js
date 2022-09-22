import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem("token"));

    return (
        <UserContext.Provider value={{token, setToken}}>{children}</UserContext.Provider>
    );
};

export {
    UserContext, UserProvider
}