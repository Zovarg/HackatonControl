import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

function AdminRoute({ children }) {
  const auth = useAuth();
  const url = new URLSearchParams();
  return (auth.user.role==='Администратор'||auth.user.role==='Гость') ? (
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
