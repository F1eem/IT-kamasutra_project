import { Redirect } from "react-router-dom";
import React from "react";

export const withAuthRedirect = (Component) => {
  const RedirectComponent = ({ isAuth, ...props }) => {
    if (!isAuth) return <Redirect to={"/Login"} />;
    return <Component {...props} />;
  };
  return RedirectComponent;
};
