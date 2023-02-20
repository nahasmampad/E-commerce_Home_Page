import { useNavigate, Outlet, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import Login from "../Pages/Login/Login";

export default function LoggedInRoutes() {
  const user = Cookies.get("user");

  if (user) {
    return <Outlet />;
  } else {
     return <Navigate to="/login" />;
  }
}
