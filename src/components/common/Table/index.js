import React, { useEffect, useRef, useState } from "react";
import {
  Arrow,
  FilterDropdown,
  Item,
  TableRow,
  WrapperFilterCheckbox,
  WrapperTestTable,
} from "./units";
import arrowUpImg from "components/assets/img/arrowUp.png";
import arrowDownImg from "components/assets/img/arrowDown.png";
import arrowUpDownImg from "components/assets/img/arrowUpDown.png";

export const TestTable = ({ items, config }) => {
  const [sortingState, setSortingState] = useState("default");
  const [localItems, setLocalItems] = useState([]);
  const [filterDropdownStatus, setFilterDropdownStatus] = useState(false);
  const [filterOptions, setFilterOptions] = useState({
    id: true,
    name: true,
    secondName: true,
    age: true,
  });
  useEffect(() => {
    setLocalItems([...items]);
  }, [items]);

  const sortingFromLess = (localItems) => {
    const sortLocalItems = localItems.sort((a, b) => {
      if (a.age > b.age) return 1;
      if (a.age === b.age) return 0;
      if (a.age < b.age) return -1;
    });
    setLocalItems(sortLocalItems);
    setSortingState("fromLess");
  };
  const sortingFromBigger = (localItems) => {
    const sortLocalItems = localItems.sort((a, b) => {
      if (a.age > b.age) return -1;
      if (a.age === b.age) return 0;
      if (a.age < b.age) return 1;
    });
    setLocalItems(sortLocalItems);
    setSortingState("fromBigger");
  };
  const sortDefault = () => {
    setLocalItems([...items]);
    setSortingState("default");
  };
  const ArrowButton = () => {
    switch (sortingState) {
      case "fromLess": {
        return (
          <Arrow
            src={arrowDownImg}
            onClick={() => sortingFromBigger(localItems)}
          />
        );
      }
      case "fromBigger": {
        return <Arrow src={arrowUpImg} onClick={sortDefault} />;
      }
      case "default": {
        return (
          <Arrow
            src={arrowUpDownImg}
            onClick={() => sortingFromLess(localItems)}
          />
        );
      }
    }
  };
  return (
    <>
      <WrapperTestTable>
        <TableRow>
          {filterOptions.id && <Item heading={true}>{config.id.title}</Item>}
          {filterOptions.name && (
            <Item heading={true}>{config.name.title}</Item>
          )}
          {filterOptions.secondName && (
            <Item heading={true}>{config.secondName.title}</Item>
          )}
          {filterOptions.age && (
            <Item heading={true}>
              {config.age.title}
              <ArrowButton />
            </Item>
          )}
          <Item
            pointer={true}
            heading={true}
            onClick={() => setFilterDropdownStatus(!filterDropdownStatus)}
          >
            Filter
          </Item>
        </TableRow>
        {localItems.map((e) => (
          <TableRow>
            {filterOptions.id && <Item>{e.id}</Item>}
            {filterOptions.name && <Item>{e.name}</Item>}
            {filterOptions.secondName && <Item>{e.secondName}</Item>}
            {filterOptions.age && <Item>{e.age}</Item>}
            <Item>---</Item>
          </TableRow>
        ))}
      </WrapperTestTable>
      {filterDropdownStatus && (
        <FilterDropdown>
          <b>Отображаемые колонки таблицы</b>
          <div>Выберите отображаемые колонки:</div>
          <WrapperFilterCheckbox>
            <div>
              <input
                onClick={() =>
                  setFilterOptions({
                    ...filterOptions,
                    id: !filterOptions.id,
                  })
                }
                checked={filterOptions.id}
                type={"checkbox"}
              />
              {config.id.title}
            </div>
            <div>
              <input
                onClick={() =>
                  setFilterOptions({
                    ...filterOptions,
                    name: !filterOptions.name,
                  })
                }
                checked={filterOptions.name}
                type={"checkbox"}
              />
              {config.name.title}
            </div>
            <div>
              <input
                onClick={() =>
                  setFilterOptions({
                    ...filterOptions,
                    secondName: !filterOptions.secondName,
                  })
                }
                checked={filterOptions.secondName}
                type={"checkbox"}
              />
              {config.secondName.title}
            </div>
            <div>
              <input
                onClick={() =>
                  setFilterOptions({
                    ...filterOptions,
                    age: !filterOptions.age,
                  })
                }
                checked={filterOptions.age}
                type={"checkbox"}
              />
              {config.age.title}
            </div>
          </WrapperFilterCheckbox>
        </FilterDropdown>
      )}
    </>
  );
};
