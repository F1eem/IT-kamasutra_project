import React, { useEffect } from "react";
import {
  Logout,
  Wrapper,
  WrapperImg,
  WrapperLogin,
  WrapperTitle,
} from "./units";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAuthData, logout } from "./../../redux/authReduser";

const Header = ({ auth, getAuthData, logout }) => {
  useEffect(() => {
    getAuthData();
  }, []);

  return (
    <Wrapper>
      <WrapperImg src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"></WrapperImg>
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

let mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps, { getAuthData, logout })(Header);
