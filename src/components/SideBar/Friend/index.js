import React from "react";
import { Round, Wrapper } from "./units";

const Friend = ({ name }) => {
  return (
    <Wrapper>
      <Round />
      {name}
    </Wrapper>
  );
};

export default Friend;
