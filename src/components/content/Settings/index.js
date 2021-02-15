import React from "react";
import { TestMenu } from "../../Test2";
import MultiSelector from "../../common/MultiSelector";

const ITEMS = [
  { id: 0, item: "Алтайский край" },
  { id: 1, item: "Амурская область" },
  { id: 2, item: "Архангельская область" },
  { id: 3, item: "Астраханская область" },
  { id: 4, item: "Белгородская область" },
  { id: 5, item: "Нижегородская область" },
];

const onClickSearchButton = (items) => {
  window.alert(items.map((e) => e.item));
};

const Settings = () => {
  return (
    <MultiSelector
      items={ITEMS}
      placeholder={"Выберите регион"}
      titleDropDawn={"Регион проживания"}
      titleSelected={"Выбранные регионы"}
      onClickSearchButton={onClickSearchButton}
    />
  );
};

export { Settings };
