import React, { useState } from "react";

import { WrapperRed} from "./units";

const Svet = () => {
    const [Num, SetNum] = useState(0)
    
  return (
    <>
      <div>
        <WrapperRed color = 'green' light = {Num == 0 ? 1 : 0}></WrapperRed>
        <WrapperRed color = 'yellow' light = {Num == 1 ? 1 : 0}></WrapperRed>
        <WrapperRed color = 'red' light = {Num == 2 ? 1 : 0}></WrapperRed>
      </div>
      <button onClick={() => SetNum(Num ===  2 ? 0 : Num + 1)  } >Start</button>
    </>
  );
};

export { Svet };
