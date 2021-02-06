import React, { useState } from "react";
import { WrapperMyInput, Wrapper, WrapperImg } from "./units";
import EyeOpen from "components/assets/img/eye.png";
import EyeClose from "components/assets/img/closed-eye.png";

const MyInput = ({ title, type, ...rest }) => {
  const [focus, setFocus] = useState(false);

  return (
    <WrapperMyInput>
      <b>{title || "Пароль"}</b>
      <Wrapper>
        <input {...rest} type={focus ? type : "password"} />
        {(type === "text" || type === "password" || !type) && (
          <WrapperImg
            onClick={() => setFocus(!focus)}
            src={focus ? EyeOpen : EyeClose}
          />
        )}
      </Wrapper>
    </WrapperMyInput>
  );
};

export { MyInput };
