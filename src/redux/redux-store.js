import { applyMiddleware, combineReducers, createStore } from "redux";
import { dialogReducer } from "./dialogsReducer";
import { galleryReducer } from "./galleryReducer";
import { profileReducer } from "./profileReducer";
import { sideBarReducer } from "./sideBarReducer";
import { usersReducer } from "./usersReducer";
import { authReducer } from "./authReduser";
import thunkMiddleWare from "redux-thunk";
import { appReducer } from "./appReduser";

let reducers = combineReducers({
  dialogPage: dialogReducer,
  profilePage: profileReducer,
  sideBar: sideBarReducer,
  galleryPage: galleryReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;
