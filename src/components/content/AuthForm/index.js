import React, { useEffect, useState } from "react";
import { Button, Error, Field, FormWrapper, Header } from "./units";
import { login } from "redux/authReduser";
import { connect } from "react-redux";

const AuthForm = ({ login, loginError }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Емайл не может быть пустым!");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым!"
  );
  const [formValid, setFormValid] = useState(false);
  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      default:
        break;
    }
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Не корректный емайл!");
    } else {
      setEmailError("");
    }
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 15) {
      if (!e.target.value) {
        setPasswordError("Пароль не может быть пустым!");
      } else {
        setPasswordError(
          "Пароль должен быть не короче 3 и не длинее 15 символов!"
        );
      }
    } else {
      setPasswordError("");
    }
  };
  useEffect(() => {
    if (emailError || passwordError) setFormValid(false);
    else setFormValid(true);
  }, [emailError, passwordError]);

  return (
    <FormWrapper>
      <Header>Authorization</Header>
      {emailDirty && emailError && <Error>{emailError}</Error>}
      <Field
        error={emailError && emailDirty}
        onChange={emailHandler}
        value={email}
        onBlur={blurHandler}
        name="email"
        placeholder={"Your email"}
      />
      {passwordDirty && passwordError && <Error>{passwordError}</Error>}
      <Field
        error={passwordError && passwordDirty}
        onChange={passwordHandler}
        value={password}
        onBlur={blurHandler}
        name="password"
        placeholder={"Your password"}
        type={"password"}
      />
      {loginError && <Error>{loginError}</Error>}
      <Button
        onClick={() => login(email, password, false)}
        disabled={!formValid}
      >
        Login
      </Button>
    </FormWrapper>
  );
};
const mapStateToProps = ({ auth: { loginError } }) => ({ loginError });

export default connect(mapStateToProps, { login })(AuthForm);
