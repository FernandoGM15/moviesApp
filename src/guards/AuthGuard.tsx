import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AppContext from "../context/AppContext/AppContext";


const PrivateValidationFragment = <Outlet />;


export const AuthGuard = () => {
    const { state } = useContext(AppContext);
    return state.user.name ? PrivateValidationFragment : <Navigate replace to="/login" />;
};

export default AuthGuard