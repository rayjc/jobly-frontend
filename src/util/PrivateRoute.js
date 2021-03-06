import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "./AuthContext";


function PrivateRoute({ exact, path, children, redirect = "/login" }) {
  const { currUser } = useContext(AuthContext);

  if (!currUser) {
    return <Redirect to={redirect} />;
  }

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
}


export default PrivateRoute;