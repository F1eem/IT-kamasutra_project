import { galleryAPI } from "api/api";
import { toggleIsFetching } from "./usersReducer";

const SET_PHOTOS_DATA = "SET_PHOTOS_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const DEL_PHOTO = "DEL_PHOTO";
const ADD_PHOTO = "ADD_PHOTO";
const UPDATE_URL_TEXT = "UPDATE_URL_TEXT";

let initialState = {
  photos: [
    {
      albumId: "Space",
      id: 1,
      title: "Текст1",
      url:
        "https://pbs.twimg.com/profile_images/793021684064419840/RjEjM6z5_400x400.jpg",
    },
    {
      albumId: "Animal",
      id: 2,
      title: "Текст2",
      url:
        "https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg",
    },
    {
      albumId: "Animal",
      id: 3,
      title: "Текст3",
      url:
        "https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg",
    },
    {
      albumId: "Automobile",
      id: 4,
      title: "Текст4",
      url:
        "data:image/jpeg;base64,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",
    },
    {
      albumId: "Nature",
      id: 5,
      title: "Текст5",
      url:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*",
    },
  ],
  isFetching: false,
  newUrlText: "",
};

let galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHOTOS_DATA:
      return {
        ...state,
        photos: [...action.photos, ...state.photos],
      };
    case DEL_PHOTO:
      return {
        ...state,
        photos: state.photos.filter((e) => e.id !== action.userId),
      };
    case ADD_PHOTO:
      return {
        ...state,
        photos: [
          {
            albumId: 2,
            id: 1,
            title: "Текст1",
            url: state.newUrlText,
          },
          ...state.photos,
        ],
        newUrlText: "",
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case UPDATE_URL_TEXT:
      return {
        ...state,
        newUrlText: action.newText,
      };
    default:
      return state;
  }
};

export const setPhotos = (photos) => ({
  type: SET_PHOTOS_DATA,
  photos,
});
export const delPhoto = (userId) => ({
  type: DEL_PHOTO,
  userId,
});
export const addPhoto = () => ({
  type: ADD_PHOTO,
});
export const updateUrlText = (newText) => ({
  type: UPDATE_URL_TEXT,
  newText,
});

export const getPhotos = () => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    galleryAPI.getPhoto().then((data) => {
      dispatch(setPhotos(data));
      dispatch(toggleIsFetching(false));
    });
  };
};

export { galleryReducer };
