import React, { useState } from "react";

import { WrapperRed } from "./units";

const Svet = () => {
  const [Num, SetNum] = useState(0);

  return (
    <>
      <div>
        <WrapperRed color="green" light={Num === 0} />
        <WrapperRed color="yellow" light={Num === 1} />
        <WrapperRed color="red" light={Num === 2} />
      </div>
      <button onClick={() => SetNum(Num === 2 ? 0 : Num + 1)}>Start</button>
    </>
  );
};

export { Svet };
