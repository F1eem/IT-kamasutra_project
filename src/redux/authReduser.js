import { authAPI } from "api/api";

const SET_AUTH_DATA = "SET_AUTH_DATA";
const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  loginError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        ...action.data,
      };
    case SET_LOGIN_ERROR:
      return {
        ...state,
        loginError: action.message,
      };
    default:
      return state;
  }
};

export const setAuthData = (id, email, login, isAuth) => ({
  type: SET_AUTH_DATA,
  data: { id, email, login, isAuth },
});
export const setLoginError = (message) => ({
  type: SET_LOGIN_ERROR,
  message,
});

export const getAuthData = () => (dispatch) => {
  authAPI.authMe().then((responce) => {
    if (responce.resultCode === 0) {
      let { id, email, login } = responce.data;
      dispatch(setAuthData(id, email, login, true));
    }
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((responce) => {
    if (responce.resultCode === 0) {
      dispatch(getAuthData());
    } else {
      dispatch(setLoginError(responce.messages));
    }
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout().then((responce) => {
    if (responce.resultCode === 0) {
      dispatch(setAuthData(null, null, null, false));
    }
  });
};

export { authReducer };
