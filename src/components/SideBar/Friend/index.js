import React from "react";
import { Round, Wrapper } from "./units";

const Friend = ({friendName}) => {
  return (
    <>
      <Wrapper>
        <Round></Round>
        {friendName}
      </Wrapper>
    </>
  );
};

export { Friend };
