import React, { useMemo } from "react";
import star from "components/assets/img/star.png";
import starEmpty from "components/assets/img/starEmpty.png";
import halfStar from "components/assets/img/halfStar.png";
import { Star } from "./units";

export const RatingBar = ({ rating }) => {
  const formRating = () => {
    const roundHalf = (num) => {
      return Math.round(num * 2) / 2;
    };
    let localRating = rating;
    let arrRating = Array.from({ length: 5 });
    arrRating.forEach((el, index, array) => {
      if (roundHalf(localRating) >= 1) {
        array[index] = 1;
      } else if (roundHalf(localRating) === 0.5) {
        array[index] = 0.5;
      } else array[index] = 0;
      localRating -= 1;
    });

    // const arrRating = [];
    // for (let i = 0; i < 5; i++) {
    //   roundHalf(localRating) >= 1
    //     ? arrRating.push(1)
    //     : roundHalf(localRating) === 0.5
    //     ? arrRating.push(0.5)
    //     : arrRating.push(0);
    //   localRating -= 1;
    // }

    return arrRating.map((el) => {
      switch (el) {
        case 1:
          return <Star src={star} />;
        case 0.5:
          return <Star src={halfStar} />;
        case 0:
          return <Star src={starEmpty} />;
        default:
          return <Star src={starEmpty} />;
      }
    });
  };
  const memoFormRating = useMemo(() => formRating(), [rating]);
  return <div>{memoFormRating}</div>;
};
