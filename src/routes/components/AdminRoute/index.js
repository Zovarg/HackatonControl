import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

function AdminRoute({ children }) {
  const auth = useAuth();
  const url = new URLSearchParams();
  return (auth.user.role==='ADMIN'||auth.user.role==='GUEST') ? (
      children
  ) : (
      <Navigate
          to={{
            pathname: "/",
            search: url.toString(),
          }}
      />
  );
}

export default AdminRoute;