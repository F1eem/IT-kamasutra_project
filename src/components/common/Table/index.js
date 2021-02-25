import React, { useEffect, useState } from "react";
import {
  Arrow,
  WrapperFilterDropdown,
  Item,
  TableRow,
  WrapperFilterCheckbox,
  WrapperTable,
  WrapperTestTable,
} from "./units";
import arrowUpImg from "components/assets/img/arrowUp.png";
import arrowDownImg from "components/assets/img/arrowDown.png";
import arrowUpDownImg from "components/assets/img/arrowUpDown.png";

export const TestTable = ({ items, config, wrapperStyle }) => {
  const [sortingState, setSortingState] = useState("default");
  const [localItems, setLocalItems] = useState([]);
  const [filterDropdownStatus, setFilterDropdownStatus] = useState(false);
  const [localConfig, setFilterOptions] = useState(config);
  useEffect(() => {
    setLocalItems([...items]);
  }, [items]);
  const sortAsc = (localItems) => {
    const sortLocalItems = localItems.sort((a, b) => {
      return a.age - b.age;
    });
    setLocalItems(sortLocalItems);
    setSortingState("sortAsc");
  };
  const sortDesc = (localItems) => {
    const sortLocalItems = localItems.sort((a, b) => {
      return b.age - a.age;
    });
    setLocalItems(sortLocalItems);
    setSortingState("sortDesc");
  };
  const sortDefault = () => {
    setLocalItems([...items]);
    setSortingState("default");
  };
  const ArrowButton = () => {
    switch (sortingState) {
      case "sortAsc": {
        return (
          <Arrow src={arrowDownImg} onClick={() => sortDesc(localItems)} />
        );
      }
      case "sortDesc": {
        return <Arrow src={arrowUpImg} onClick={sortDefault} />;
      }
      case "default": {
        return (
          <Arrow src={arrowUpDownImg} onClick={() => sortAsc(localItems)} />
        );
      }
    }
  };
  const formHeaderItems = (localConfig) => {
    return Object.entries(localConfig).map(
      ([configItemKey, configItemSetting], key) => {
        return (
          localConfig[configItemKey].inOneClaimTable && (
            <Item key={key} heading>
              {configItemSetting.title}
              {configItemKey === "age" && <ArrowButton />}
            </Item>
          )
        );
      }
    );
  };
  const formDataItems = (localConfig) => {
    return localItems.map((dataItem, key) => (
      <TableRow key={key}>
        {Object.entries(localConfig).reduce((result, [configItemKey]) => {
          if (dataItem[configItemKey] || dataItem[configItemKey] === 0) {
            result.push(
              localConfig[configItemKey].inOneClaimTable && (
                <Item>{dataItem[configItemKey]}</Item>
              )
            );
          } else {
            result.push(
              localConfig[configItemKey].inOneClaimTable && <Item>---</Item>
            );
          }
          return result;
        }, [])}
        <Item>/</Item>
      </TableRow>
    ));
  };
  return (
    <WrapperTestTable {...{ wrapperStyle }}>
      <WrapperTable>
        <TableRow>
          {formHeaderItems(localConfig)}
          <Item
            pointer={true}
            heading={true}
            onClick={() => setFilterDropdownStatus(!filterDropdownStatus)}
          >
            Filter
          </Item>
        </TableRow>
        {formDataItems(localConfig)}
      </WrapperTable>
      {filterDropdownStatus && (
        <FilterDropdown {...{ localConfig, config, setFilterOptions }} />
      )}
    </WrapperTestTable>
  );
};

const FilterDropdown = ({ localConfig, config, setFilterOptions }) => {
  const onChangeInputHandler = (configItemKey) => {
    setFilterOptions({
      ...localConfig,
      [configItemKey]: {
        ...localConfig[configItemKey],
        inOneClaimTable: !localConfig[configItemKey].inOneClaimTable,
      },
    });
  };
  const formFilterItems = () => {
    return Object.entries(localConfig).reduce((result, [configItemKey]) => {
      result.push(
        <div>
          <input
            onChange={() => onChangeInputHandler(configItemKey)}
            checked={localConfig[configItemKey].inOneClaimTable}
            type={"checkbox"}
          />
          {config[configItemKey].title}
        </div>
      );
      return result;
    }, []);
  };
  return (
    <WrapperFilterDropdown>
      <b>Отображаемые колонки таблицы</b>
      <div>Выберите отображаемые колонки:</div>
      <WrapperFilterCheckbox>{formFilterItems()}</WrapperFilterCheckbox>
    </WrapperFilterDropdown>
  );
};
