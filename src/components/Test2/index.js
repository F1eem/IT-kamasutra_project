import React, { useState } from "react";

import { MyButton, TestMenuWrapper, ImgWrapper } from "./units";

const Page = ({ num }) => {
  return (
    <>
      {num === 1 ? (
        <ImgWrapper src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" />
      ) : num === 2 ? (
        <div>Two</div>
      ) : num === 3 ? (
        <div>Three</div>
      ) : null}
    </>
  );
};

const TestMenu = () => {
  const [num, setNum] = useState(0);

  return (
    <>
      <TestMenuWrapper>
        <MyButton onClick={() => setNum(1)} light={num === 1}>
          One
        </MyButton>
        <MyButton onClick={() => setNum(2)} light={num === 2}>
          Two
        </MyButton>
        <MyButton onClick={() => setNum(3)} light={num === 3}>
          Three
        </MyButton>
      </TestMenuWrapper>
      <Page num={num} />
    </>
  );
};

export { TestMenu };
