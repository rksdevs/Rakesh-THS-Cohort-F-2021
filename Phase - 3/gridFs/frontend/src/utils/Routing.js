import { Guest, User } from "../Layouts";
import { SignIn, SignUp } from "../Views";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { useContext, useEffect } from "react";
import authContext from "../Context/Auth/authContext";
import setAuthToken from "./setAuthToken";

const Routing = () => {
  const { validateToken } = useContext(authContext);
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      setAuthToken(token);
      validateToken();
    }
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Landing</h1>}></Route>
        <Route path="/signin" element={<Guest Child={SignIn} />}></Route>
        <Route path="/signup" element={<Guest Child={SignUp} />}></Route>
        <Route
          path="/user/dashboard"
          element={<PrivateRoute Component={User} />}
        ></Route>
      </Routes>
    </div>
  );
};

export default Routing;
