import { createContext, useState, useContext } from "react";

export const LoginContext = createContext({ email: "", password: "" });

LoginContext.Provider.displayName = "LoginContextProvider";

const LoginProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({
    email: "",
    password: "",
    loginStatus: false,
  });
  const setLogin = (data) =>
    setLoggedInUser({
      ...loggedInUser,
      email: data.email,
      password: data.password,
      loginStatus: true,
    });

  const setLogout = () =>
    setLoggedInUser({
      ...loggedInUser,
      email: "",
      password: "",
      loginStatus: false,
    });
  return (
    <LoginContext.Provider value={{ loggedInUser, setLogin, setLogout }}>
      {children}
    </LoginContext.Provider>
  );
};
export default LoginProvider;

export const useLogin = () => {
  return useContext(LoginContext);
};
