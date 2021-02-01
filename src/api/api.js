import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "d6b98993-985e-4c9c-a211-bd819b3e341d",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const userAPI = {
  getUsers: (pageSize = 5, currentUsersPage = 1) => {
    return instance
      .get(`users?count=${pageSize}&page=${currentUsersPage}`)
      .then((responce) => responce.data);
  },
  addFollow: (userId) => {
    return instance.post(`follow/${userId}`).then((responce) => responce.data);
  },
  delFollow: (userId) => {
    return instance
      .delete(`follow/${userId}`)
      .then((responce) => responce.data);
  },
};

export const profileAPI = {
  getUserProfile: (userId) => {
    return instance.get(`profile/${userId}`).then((responce) => responce.data);
  },
  getUserStatus: (userId) => {
    return instance
      .get(`profile/status/${userId}`)
      .then((responce) => responce.data);
  },
  updateUserStatus: (status) => {
    return instance
      .put(`profile/status`, { status })
      .then((responce) => responce.data);
  },
};

export const authAPI = {
  authMe: () => {
    return instance.get(`auth/me`).then((responce) => responce.data);
  },
  login: (email, password, rememberMe) => {
    return instance
      .post(`auth/login`, { email, password, rememberMe })
      .then((responce) => responce.data);
  },
  logout: () => {
    return instance.delete(`auth/login`).then((responce) => responce.data);
  },
};

export const galleryAPI = {
  getPhoto: () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((responce) => responce.data);
  },
};
