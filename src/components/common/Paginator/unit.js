import styled from "@emotion/styled";

export const WrapperPageNumber = styled.span`
  display: flex;
  justify-content: center;
  background-color: ${({ active }) =>
    active === true ? "rgba(38, 52, 68, 141)" : "rgba(83, 95, 109, 142)"};
  width: 40px;
  cursor: pointer;
  padding: 3px;
  border-radius: 5px;
  color: white;
  margin: 3px;
  box-shadow: 0 1px 5px black;
  &:hover {
    background-color: rgba(83, 108, 128, 138);
  }
`;
export const WrapperPaginator = styled.div`
  display: flex;
  margin: 5px;
`;
export const WrapperNumbers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
`;
export const NavButton = styled.button`
  background-color: rgba(83, 95, 109, 142);
  cursor: pointer;
  border-radius: 5px;
  border: none;
  box-shadow: 0 1px 5px black;
  outline: none;
  margin: 3px;
  color: white;
  width: 70px;
  &:hover {
    background-color: rgba(83, 108, 128, 138);
  }
`;
