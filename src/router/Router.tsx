import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthGuard from "../guards/AuthGuard";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<AuthGuard />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  )

};
export default Router;
