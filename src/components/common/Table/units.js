import styled from "@emotion/styled";

export const WrapperTestTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid black;
  border-left: 1px solid black;
  box-shadow: 0 0 5px grey;
  align-self: start;
`;
export const TableRow = styled.div`
  display: flex;
`;
export const Arrow = styled.img`
  width: 15px;
  cursor: pointer;
`;
export const FilterDropdown = styled.div`
  box-shadow: 0 0 5px gainsboro;
  align-self: start;
  position: relative;
  right: 150px;
  top: 25px;
  background-color: white;
`;
export const WrapperFilterCheckbox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  background-color: ${({ heading }) => (heading ? "gainsboro" : "white")};
  color: black;
  font-weight: ${({ heading }) => heading && "bold"};
  cursor: ${({ pointer }) => (pointer ? "pointer" : "default")};
`;
