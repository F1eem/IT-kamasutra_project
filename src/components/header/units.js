import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  background-color: blue;
  border-radius: 20px;
  margin: 5px;
`;
export const Logout = styled.button`
  height: 30px;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  border: 1px solid black;
  margin: 5px;
  color: white;
  background-color: grey;
`;
const WrapperLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  & a {
    color: white;
  }
  padding: 5px;
`;
const WrapperImg = styled.img`
  width: 50px;
  padding: 10px;
`;
const WrapperTitle = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  padding: 15px;
  font-size: 20px;
  color: white;
`;

export { Wrapper, WrapperImg, WrapperTitle, WrapperLogin };
