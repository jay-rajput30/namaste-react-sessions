import { Navigate, useNavigate } from "react-router-dom";
import { useLogin } from "../contexts/LoginProvider";

const ProtectedRoute = ({ children }) => {
  const {
    loggedInUser: { loginStatus },
  } = useLogin();
  const navigate = useNavigate();
  if (!loginStatus) {
    navigate("/login");
  }
  return children;
};

export default ProtectedRoute;
