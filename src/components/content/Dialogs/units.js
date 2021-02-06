import styled from "@emotion/styled";

const WrapperDialogs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-grow: 1;
`;
const WrapperDialogsItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  flex-grow: 1;
  background-color: ghostwhite;
`;
const WrapperMessageItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px;
  flex-grow: 4;
  background-color: goldenrod;
`;
const Message = styled.div`
  border: 2px solid black;
  border-radius: 25px;
  padding: 5px;
  margin: 2px;
`;
export { WrapperDialogs, WrapperDialogsItems, WrapperMessageItems, Message };
