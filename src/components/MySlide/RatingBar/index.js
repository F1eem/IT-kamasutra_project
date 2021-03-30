import React from "react";
import star from "components/assets/img/star.png";
import starEmpty from "components/assets/img/starEmpty.png";
import halfStar from "components/assets/img/halfStar.png";
import { Star } from "./units";

export const RatingBar = ({ rating }) => {
  const formRating = () => {
    const arrRating = [];
    for (let i = 0; i < 5; i++) {
      rating >= 0.7
        ? arrRating.push(1)
        : rating < 0.7 && rating >= 0.26
        ? arrRating.push(0.5)
        : arrRating.push(0);
      rating -= 1;
    }
    return arrRating.map((el) => {
      switch (el) {
        case 1:
          return <Star src={star} />;
        case 0.5:
          return <Star src={halfStar} />;
        case 0:
          return <Star src={starEmpty} />;
      }
    });
  };
  return <div>{formRating()}</div>;
};
