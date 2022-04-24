import React, {useState, createContext} from 'react'

export const AppContext = createContext(null);

export const AppContextProvider = ({children}) =>{
    const [state, setAppState] = useState({
        email: '',
        walletAddress: '',
        isLogin:false,
    });
    return (
        <AppContext.Provider value={{state, setAppState}}>
            {children}
        </AppContext.Provider> 
    );
}