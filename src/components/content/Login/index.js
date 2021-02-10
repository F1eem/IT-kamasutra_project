import React from "react";
import AuthForm from "../AuthForm";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Login = ({ isAuth }) => {
  return <>{isAuth ? <Redirect to={"/profile"} /> : <AuthForm />}</>;
};

const mapStateToProps = ({ auth: { isAuth } }) => ({ isAuth });

export default connect(mapStateToProps)(Login);
