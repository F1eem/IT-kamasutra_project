import styled from "@emotion/styled";
import { css } from "@emotion/core";

export const WrapperTable = styled.div`
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
  width: 100%;
`;
export const Arrow = styled.img`
  width: 15px;
  cursor: pointer;
`;
export const WrapperFilterDropdown = styled.div`
  display: block;
  padding: 5px;
  box-shadow: 0 0 5px gainsboro;
  background-color: white;
  width: 250px;
  position: absolute;
  right: 20px;
  top: 10px;
`;
export const WrapperFilterCheckbox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const WrapperTestTable = styled.div`
  position: relative;
  width: 100%;
  ${({ wrapperStyle }) => css`
    ${wrapperStyle}
  `}
`;
export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  flex-grow: 1;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  background-color: ${({ heading }) => (heading ? "gainsboro" : "white")};
  color: black;
  font-weight: ${({ heading }) => heading && "bold"};
  cursor: ${({ pointer }) => (pointer ? "pointer" : "default")};
`;
