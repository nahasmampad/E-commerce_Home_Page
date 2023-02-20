import { useContext } from "react";

import { useNavigate, Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

export default function NotLoggedInRoutes() {
  const navigate = useNavigate();
  const user = Cookies.get("user");

  if (user) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
}
