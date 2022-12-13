import { Outlet, Navigate } from "react-router-dom";
import Login from "./Components/Login";

const ProtectedRoutes = () => {
  let auth = { token: false };
  return auth.token ? <Outlet /> : <Navigate to="/Login" />;
};

export default ProtectedRoutes;
