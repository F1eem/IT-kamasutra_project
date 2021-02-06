import React, { useState } from "react";
import { MyDropdown } from "components/MyDropdown";
import { Wrapper } from "./units";

let options = [
  {
    elem: "Москва",
    id: 0,
  },
  {
    elem: "Нижегородская область",
    id: 1,
  },
  {
    elem: "Лененградская область",
    id: 2,
  },
];

const News = () => {
  const [elem, setElem] = useState(options[0].elem);
  const [visible, setVisible] = useState(false);
  const dropdownClickHandler = (elem) => {
    setElem(elem);
    setVisible(false);
  };

  return (
    <>
      <Wrapper>
        <div>
          Выберите регион: <b onClick={() => setVisible(true)}> {elem} </b>
        </div>
        {visible && (
          <MyDropdown
            options={options}
            placeholder={"Введите регион"}
            onClickItem={dropdownClickHandler}
          />
        )}
      </Wrapper>
    </>
  );
};

export { News };
