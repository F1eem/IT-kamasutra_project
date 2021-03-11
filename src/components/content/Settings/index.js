import React from "react";
import { TestTable } from "../Table";
import { css } from "@emotion/core";
import ITEMS from "api/claimTable";
import { claimDict } from "api/claimTable";

// const ITEMS = [
//   { id: 0, item: "Алтайский край" },
//   { id: 1, item: "Амурская область" },
//   { id: 2, item: "Архангельская область" },
//   { id: 3, item: "Астраханская область" },
//   { id: 4, item: "Белгородская область" },
//   { id: 5, item: "Нижегородская область" },
// ];
//
// const onClickSearchButton = (items) => {
//   window.alert(items.map((e) => e.item));
// };
const TABLE_ITEMS = [
  { id: 0, name: "Anton", secondName: "Tereshkin", age: "27" },
  {
    id: 1,
    name: "Igor",
    secondName: "Tereshkin",
    age: "31",
  },
  {
    id: 2,
    name: "Kristina",
    secondName: "Veselova",
    age: "32",
    number: "test",
  },
  { id: 3, name: "Ivan", secondName: "Barankin", age: "30" },
];
const CONFIG = {
  id: { title: "ИД", inOneClaimTable: true, sortable: true },
  name: { title: "Имя", inOneClaimTable: true, sortable: true },
  secondName: { title: "Фамилия", inOneClaimTable: true, sortable: true },
  number: { title: "Тест", inOneClaimTable: true },
  age: { title: "Возраст", inOneClaimTable: true, sortable: true },
};

const Settings = () => {
  return <div>Setting</div>;
};

export { Settings };
