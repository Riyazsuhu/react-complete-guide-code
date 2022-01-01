import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (username, password) => { }
})
export const AuthContextProvider = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        localStorage.getItem('isLogin') && setIsLoggedIn(true)
    }, [])
    const loginHandler = (email, password) => {
        localStorage.setItem('isLogin', true)
        setIsLoggedIn(true);
    };
    const logoutHandler = () => {
        localStorage.clear()
        setIsLoggedIn(false);
    };
    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            onLogin: loginHandler,
            onLogout: logoutHandler
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext