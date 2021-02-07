import React from "react";
import {
  Logout,
  Wrapper,
  WrapperImg,
  WrapperLogin,
  WrapperTitle,
} from "./units";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "redux/authReduser";

const Header = ({ auth, logout }) => {
  return (
    <Wrapper>
      <WrapperImg src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" />
      <WrapperTitle>Заголовок сайта</WrapperTitle>
      <WrapperLogin>
        {auth.isAuth === false ? (
          <NavLink to={"/Login"}>Login</NavLink>
        ) : (
          <>
            <div>{auth.login}</div>
            <Logout onClick={() => logout()}>Logout</Logout>
          </>
        )}
      </WrapperLogin>
    </Wrapper>
  );
};

let mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { logout })(Header);
