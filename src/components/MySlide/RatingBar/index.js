import React from "react";
import star from "components/assets/img/star.png";
import starEmpty from "components/assets/img/starEmpty.png";
import halfStar from "components/assets/img/halfStar.png";

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
          return <img width={"20px"} height={"20px"} src={star} />;
        case 0.5:
          return <img width={"20px"} height={"20px"} src={halfStar} />;
        case 0:
          return <img width={"20px"} height={"20px"} src={starEmpty} />;
      }
    });
  };
  return <div>{formRating()}</div>;
};
