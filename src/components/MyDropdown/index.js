import React, { useState } from "react";
import { WrapperDropdown, WrapperElem, DropInput } from "./units";

const MyDropdown = ({ options, placeholder, onClickItem }) => {
  const [text, setText] = useState("");
  const filtered = options.filter((str) => {
    return str.elem.includes(text);
  });

  return (
    <>
      <WrapperDropdown>
        <DropInput
          {...{ placeholder }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {filtered.map(({ id, elem }) => (
          <WrapperElem key={id} onClick={() => onClickItem(elem)}>
            {elem}
          </WrapperElem>
        ))}
      </WrapperDropdown>
    </>
  );
};

export { MyDropdown };
