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
import { StatusButton } from "./StatusButton";

export const TestTable = ({ items, config, wrapperStyle }) => {
  const [sortingState, setSortingState] = useState({ id: "default" });
  const [localItems, setLocalItems] = useState([]);
  const [filterDropdownStatus, setFilterDropdownStatus] = useState(false);
  const [localConfig, setLocalConfig] = useState(config);
  const [filterConfig, setFilterConfig] = useState(
    JSON.parse(localStorage.getItem("filterTable"))
  );

  useEffect(() => {
    localStorage.setItem("filterTable", JSON.stringify(filterConfig));
  }, [filterConfig]);

  useEffect(() => {
    setLocalItems([...items]);
  }, [items]);

  const sortAsc = (localItems, configItemKey) => {
    const sortLocalItems = localItems.sort((a, b) => {
      if (parseInt(a[configItemKey]) >= 0 || parseInt(a[configItemKey]) <= 0) {
        return a[configItemKey] - b[configItemKey];
      } else {
        const nameA = a[configItemKey].toLowerCase(),
          nameB = b[configItemKey].toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      }
    });
    setLocalItems(sortLocalItems);
    setSortingState({ [configItemKey]: "sortAsc" });
  };
  const sortDesc = (localItems, configItemKey) => {
    const sortLocalItems = localItems.sort((a, b) => {
      if (parseInt(a[configItemKey]) >= 0 || parseInt(a[configItemKey]) <= 0) {
        return b[configItemKey] - a[configItemKey];
      } else {
        const nameA = a[configItemKey].toLowerCase(),
          nameB = b[configItemKey].toLowerCase();
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
        return 0;
      }
    });
    setLocalItems(sortLocalItems);
    setSortingState({ [configItemKey]: "sortDesc" });
  };
  const sortDefault = (configItemKey) => {
    setLocalItems([...items]);
    setSortingState({ [configItemKey]: "default" });
  };
  const ArrowButton = ({ configItemKey }) => {
    const sortingStateKey = Object.keys(sortingState)[0];
    if (configItemKey === sortingStateKey) {
      switch (sortingState[configItemKey]) {
        case "sortAsc": {
          return (
            <Arrow
              src={arrowDownImg}
              onClick={() => sortDesc(localItems, configItemKey)}
            />
          );
        }
        case "sortDesc": {
          return <Arrow src={arrowUpImg} onClick={sortDefault} />;
        }
        case "default": {
          return (
            <Arrow
              src={arrowUpDownImg}
              onClick={() => sortAsc(localItems, configItemKey)}
            />
          );
        }
      }
    } else {
      return (
        <Arrow
          src={arrowUpDownImg}
          onClick={() => sortAsc(localItems, configItemKey)}
        />
      );
    }
  };
  const formHeaderItems = (localConfig, filterConfig) => {
    return Object.entries(localConfig).map(
      ([configItemKey, configItemSetting], key) => {
        return (
          filterConfig[configItemKey] && (
            <Item key={key} heading>
              {configItemSetting.title}
              {configItemSetting.sortable && (
                <ArrowButton {...{ configItemKey }} />
              )}
            </Item>
          )
        );
      }
    );
  };
  const formDataItems = (localConfig, filterConfig) => {
    return localItems.map((dataItem, key) => (
      <TableRow key={key}>
        {Object.entries(localConfig).reduce((result, [configItemKey]) => {
          if (dataItem[configItemKey] || dataItem[configItemKey] === 0) {
            result.push(
              filterConfig[configItemKey] && (
                <Item pointer={true}>
                  {configItemKey === "status" ? (
                    <StatusButton status={dataItem[configItemKey]} />
                  ) : (
                    dataItem[configItemKey]
                  )}
                </Item>
              )
            );
          } else {
            result.push(filterConfig[configItemKey] && <Item>---</Item>);
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
          {formHeaderItems(localConfig, filterConfig)}
          <Item
            pointer={true}
            heading={true}
            onClick={() => setFilterDropdownStatus(!filterDropdownStatus)}
          >
            Filter
          </Item>
        </TableRow>
        {formDataItems(localConfig, filterConfig)}
      </WrapperTable>
      {filterDropdownStatus && (
        <FilterDropdown
          {...{
            localConfig,
            config,
            setLocalConfig,
            filterConfig,
            setFilterConfig,
          }}
        />
      )}
    </WrapperTestTable>
  );
};

const FilterDropdown = ({
  localConfig,
  config,
  filterConfig,
  setFilterConfig,
}) => {
  const onChangeInputHandler = (configItemKey) => {
    setFilterConfig({
      ...filterConfig,
      [configItemKey]: !filterConfig[configItemKey],
    });
  };
  const formFilterItems = () => {
    return Object.entries(localConfig).reduce((result, [configItemKey]) => {
      result.push(
        <div>
          <input
            onChange={() => onChangeInputHandler(configItemKey)}
            checked={filterConfig[configItemKey]}
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
