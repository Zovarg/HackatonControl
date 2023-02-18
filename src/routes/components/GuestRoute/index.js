import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

function GuestRoute({ children, ...rest }) {
  const auth = useAuth();
  const location = useLocation();
  const url = new URLSearchParams(location.search.slice(1));

  if(auth.user && auth.user.role=='Администратор'){
    return <Navigate to={url.get("redirect") || "/admin"}/>
  }else if(auth.user && auth.user.role=='Гость'){
    return <Navigate to={url.get("redirect") || "/admin"}/>
  }else {return children}


}

export default GuestRoute;
