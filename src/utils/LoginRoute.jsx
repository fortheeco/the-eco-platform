import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

export default function LoginRoute() {
  const { token } = useAuthContext();
  const location = useLocation();

  return !token ? (
    <Outlet />
  ) : (
    <Navigate to="/your-Eco" state={{ from: location }} replace />
  );
}
