import React, { useEffect, useState } from "react";
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
  const [localConfig, setFilterOptions] = useState(config);
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
          {Object.entries(localConfig).map(
            (e, key) =>
              localConfig[e[0]].inOneClaimTable && (
                <Item key={key} heading>
                  {e[1].title}
                  {e[0] === "age" && <ArrowButton />}
                </Item>
              )
          )}
          <Item
            pointer={true}
            heading={true}
            onClick={() => setFilterDropdownStatus(!filterDropdownStatus)}
          >
            Filter
          </Item>
        </TableRow>
        {localItems.map((item, key) => (
          <TableRow key={key}>
            {Object.entries(localConfig).reduce((result, count) => {
              if (item[count[0]] || item[count[0]] === 0) {
                result.push(
                  localConfig[count[0]].inOneClaimTable && (
                    <Item>{item[count[0]]}</Item>
                  )
                );
              } else {
                result.push(
                  localConfig[count[0]].inOneClaimTable && <Item>---</Item>
                );
              }
              return result;
            }, [])}
            <Item>/</Item>
          </TableRow>
        ))}
      </WrapperTestTable>
      {filterDropdownStatus && (
        <FilterDropdown>
          <b>Отображаемые колонки таблицы</b>
          <div>Выберите отображаемые колонки:</div>
          <WrapperFilterCheckbox>
            {Object.entries(localConfig).reduce((result, count) => {
              result.push(
                <div>
                  <input
                    onChange={() =>
                      setFilterOptions({
                        ...localConfig,
                        [count[0]]: {
                          ...localConfig[count[0]],
                          inOneClaimTable: !localConfig[count[0]]
                            .inOneClaimTable,
                        },
                      })
                    }
                    checked={localConfig[count[0]].inOneClaimTable}
                    type={"checkbox"}
                  />
                  {config[count[0]].title}
                </div>
              );
              return result;
            }, [])}
          </WrapperFilterCheckbox>
        </FilterDropdown>
      )}
    </>
  );
};
