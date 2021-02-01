import React, { useState } from "react";

import { MyButton, TestMenuWrapper, ImgWrapper } from "./units";

const TestMenu = (props) => {
  const [num, setNum] = useState(0);

  return (
    <>
      <TestMenuWrapper>
        <MyButton onClick={() => setNum(1)} light={num === 1 ? 1 : 0}>
          One
        </MyButton>
        <MyButton onClick={() => setNum(2)} light={num === 2 ? 1 : 0}>
          Two
        </MyButton>
        <MyButton onClick={() => setNum(3)} light={num === 3 ? 1 : 0}>
          Three
        </MyButton>
      </TestMenuWrapper>
      {num === 1 ? (
        <ImgWrapper src = 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'/>
      ) : num === 2 ? (
        <div>Two</div>
      ) : num === 3 ? (
        <div>Three</div>
      ) : null}
    </>
  );
};

export { TestMenu };
