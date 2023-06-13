import React, { useReducer } from "react"
import AppContext from "./AppContext"
import { UserI } from "../../services/user.service";
import AppReducer from "./AppReducer";

interface AppProviderPropsI {
    children: React.JSX.Element | React.JSX.Element[]
}

export interface AppStateI {
    user: UserI;
}

const INITIAL_STATE: AppStateI = {
    user: {
        id: 0,
        name: "",
        email: "",
    },
};

const AppProvider = ({ children }: AppProviderPropsI) => {

    const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

    const setUser = (user: UserI) => {
        dispatch({ type: "SET_USER", payload: user })
    }
    return (
        <AppContext.Provider value={{
            state,
            loading: true,
            setUser
        }}>
            {children}
        </AppContext.Provider>
    )
}
export default AppProvider