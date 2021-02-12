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
export const getAuthData = () => async (dispatch) => {
  const response = await authAPI.authMe();
  if (response.resultCode === 0) {
    let { id, email, login } = response.data;
    dispatch(setAuthData(id, email, login, true));
  }
  return response;
};
export const login = (email, password, rememberMe) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe);
  if (response.resultCode === 0) {
    dispatch(getAuthData());
  } else {
    dispatch(setLoginError(response.messages));
  }
};
export const logout = () => async (dispatch) => {
  const response = await authAPI.logout();
  if (response.resultCode === 0) {
    dispatch(setAuthData(null, null, null, false));
  }
};

export { authReducer };
