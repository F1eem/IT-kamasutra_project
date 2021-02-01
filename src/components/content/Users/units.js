import styled from "@emotion/styled";

const WrapperUsersForm = styled.div`
  display: flex;
  justify-content: left;
  margin: 10px;
`;
const WrapperName = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const WrapperPageNumber = styled.span`
  cursor: pointer;
  padding: 3px;
  border: black solid 1px;
  color: ${({ active }) => (active === true ? "red" : "black")};
`;
export { WrapperUsersForm, WrapperName, WrapperPageNumber };
