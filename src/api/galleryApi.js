import * as axios from "axios";

export const galleryApi = {
  getPhoto: () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((responce) => responce.data);
  },
};
