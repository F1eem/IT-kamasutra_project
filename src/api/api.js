import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "d6b98993-985e-4c9c-a211-bd819b3e341d",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const userAPI = {
  getUsers: async (pageSize = 5, currentUsersPage = 1) => {
    const response = await instance.get(
      `users?count=${pageSize}&page=${currentUsersPage}`
    );
    return response.data;
  },
  addFollow: async (userId) => {
    const response = await instance.post(`follow/${userId}`);
    return response.data;
  },
  delFollow: async (userId) => {
    const response = await instance.delete(`follow/${userId}`);
    return response.data;
  },
};

export const profileAPI = {
  getUserProfile: async (userId) => {
    const response = await instance.get(`profile/${userId}`);
    return response.data;
  },
  getUserStatus: async (userId) => {
    const response = await instance.get(`profile/status/${userId}`);
    return response.data;
  },
  updateUserStatus: async (status) => {
    const response = await instance.put(`profile/status`, { status });
    return response.data;
  },
};

export const authAPI = {
  authMe: async () => {
    const response = await instance.get(`auth/me`);
    return response.data;
  },
  login: async (email, password, rememberMe) => {
    const response = await instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
    });
    return response.data;
  },
  logout: async () => {
    const response = await instance.delete(`auth/login`);
    return response.data;
  },
};

export const galleryAPI = {
  getPhoto: async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/albums/1/photos"
    );
    return response.data;
  },
};
