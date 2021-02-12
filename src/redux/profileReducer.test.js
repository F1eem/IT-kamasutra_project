import React from "react";
import { addNewPost, profileReducer } from "./profileReducer";

const state = {
  postsData: [
    {
      id: 0,
      text: "Post1",
      link:
        "https://peopletalk.ru/files/articles/6/5253/s5_8dad37e82e74f542e022285ff451078f.jpg",
      number: 6,
    },
    {
      id: 1,
      text: "PewPew One Two Three",
      link: "https://www.kino-teatr.ru/movie/posters/big/8/36398.jpg",
      number: 10,
    },
    { id: 2, text: "Post3", number: 155 },
    { id: 3, text: "234234", number: 213 },
  ],
  updateNewText: "",
  profile: null,
  status: null,
};

test("length of posts should be incremented", () => {
  let action = addNewPost();
  let newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(++state.postsData.length);
});
