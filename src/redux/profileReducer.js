import { profileAPI } from "api/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const UPDATE_USER_STATUS = "UPDATE_USER_STATUS";

let initialState = {
  postsData: [
    {
      id: 1,
      text: "Post1",
      link:
        "https://peopletalk.ru/files/articles/6/5253/s5_8dad37e82e74f542e022285ff451078f.jpg",
      number: 6,
    },
    {
      id: 2,
      text: "PewPew One Two Three",
      link: "https://www.kino-teatr.ru/movie/posters/big/8/36398.jpg",
      number: 10,
    },
    { id: 3, text: "Post3", number: 155 },
    { id: 4, text: "234234", number: 213 },
  ],
  updateNewText: "",
  profile: null,
  status: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        text: state.updateNewText,
        number: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        updateNewText: "",
      };

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        updateNewText: action.newText,
      };
    }
    case SET_USER_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    default:
      return state;
  }
};

export const addNewPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
});

export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getUserProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getUserStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getUserStatus(userId).then((data) => {
      dispatch(setUserStatus(data));
    });
  };
};
export const updateUserStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateUserStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserStatus(status));
      }
    });
  };
};
export { profileReducer };
