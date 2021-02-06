import React from "react";
import { Round, Wrapper } from "./units";

const Friend = ({ friendName }) => {
  return (
    <Wrapper>
      <Round />
      {friendName}
    </Wrapper>
  );
};

export default Friend;
