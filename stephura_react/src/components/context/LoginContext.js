import { createContext, useState } from "react";

const LoginContext = createContext();

export function LoginProvider({children}) {
    const [login, setLogin] = useState(false)

    const toggleLogin = () => {
        setLogin(!login)
    }
    
    return (
        <LoginContext.Provider value={{login, setLogin, toggleLogin}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContext;