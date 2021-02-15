import styled from "@emotion/styled";

const UserForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  width: 250px;
  border: 1px solid rgba(83, 95, 109, 142);
  border-radius: 3px;
  padding: 2px;
`;
const UserName = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
const WrapperUsers = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const WrapperUsersPage = styled.div`
  display: flex;
  flex-direction: column;
`;

export { UserForm, UserName, WrapperUsers, WrapperUsersPage };
