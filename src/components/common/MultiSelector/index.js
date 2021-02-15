import React, { useState } from "react";
import delImg from "components/assets/img/delbutton.png";
import {
  DelButton,
  Title,
  SelectedItem,
  WrapperSelectedItems,
  WrapperItems,
  DropBox,
  Item,
  InputItem,
  SendButton,
} from "./units";

const MultiSelector = ({
  items,
  titleDropDawn,
  titleSelected,
  placeholder,
  onClickSearchButton,
}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [inputText, setInputText] = useState("");
  const [activeDropBox, setActiveDropBox] = useState(false);
  const addSelectItem = (item) => {
    if (!selectedItems.find((e) => e.item === item.item)) {
      setSelectedItems([...selectedItems, item]);
    }
  };
  const delSelectItem = (item) => {
    setSelectedItems(selectedItems.filter((e) => e !== item));
  };
  const onClickSearchButtonHandler = () => {
    onClickSearchButton(selectedItems);
    setSelectedItems([]);
    setActiveDropBox(false);
  };
  return (
    <>
      <DropBox>
        <Title>{titleDropDawn}:</Title>
        <InputItem
          onFocus={() => setActiveDropBox(true)}
          placeholder={placeholder}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        {activeDropBox && (
          <WrapperItems>
            {items.reduce((result, count) => {
              if (count.item.includes(inputText)) {
                result.push(
                  <Item onClick={() => addSelectItem(count)}>{count.item}</Item>
                );
              }
              return result;
            }, [])}
          </WrapperItems>
        )}
      </DropBox>
      <div>
        <Title>{titleSelected}:</Title>
        <WrapperSelectedItems>
          {selectedItems.length < 4 ? (
            selectedItems.map((e) => (
              <SelectedItem>
                <div>{e.item}</div>
                <DelButton onClick={() => delSelectItem(e)} src={delImg} />
              </SelectedItem>
            ))
          ) : (
            <div>
              {selectedItems.reduce((result, count, index) => {
                if (index < 3) {
                  result.push(
                    <SelectedItem>
                      <div>{count.item}</div>
                      <DelButton
                        onClick={() => delSelectItem(count)}
                        src={delImg}
                      />
                    </SelectedItem>
                  );
                }
                return result;
              }, [])}
              <SelectedItem>Еще:{selectedItems.length - 3}</SelectedItem>
            </div>
          )}
          <SendButton
            disabled={selectedItems.length < 1}
            onClick={onClickSearchButtonHandler}
          >
            Искать
          </SendButton>
        </WrapperSelectedItems>
      </div>
    </>
  );
};

export default MultiSelector;
