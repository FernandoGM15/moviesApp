import { Navigate, Outlet } from "react-router-dom";

const AuthGuard = () => {
    const isAuth = false;
    return isAuth ? <Outlet /> : <Navigate to="/login" />
}
export default AuthGuard