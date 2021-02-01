import styled from "@emotion/styled";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  background: white;
  transform: translate(-50%, -50%);
  box-shadow: 10px 10px 10px gray;
  width: 400px;
  border-radius: 10px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  font-size: 30px;
  background-color: ghostwhite;
  border-radius: 10px 10px 0px 0px;
  height: 70px;
  margin-bottom: 25px;
`;
export const Error = styled.div`
  display: flex;
  justify-content: center;
  color: red;
  font-size: 14px;
`;
export const ServerLoginError = styled.div`
  display: flex;
  justify-content: center;
  color: red;
  font-size: 14px;
`;
export const Field = styled.input`
  border-radius: 10px;
  display: flex;
  padding: 15px;
  margin: 15px 35px;
  font-weight: bold;
  font-size: 16px;
  &::placeholder {
    color: gainsboro;
  }
  border: 2px solid ${({ error }) => (error ? "red" : "gainsboro")};
  border-bottom: 4px solid ${({ error }) => (error ? "red" : "gainsboro")};
  outline: none;
`;
export const Button = styled.button`
  height: 60px;
  border-radius: 10px;
  background-color: mediumseagreen;
  border: 3px solid green;
  border-bottom: 5px solid green;
  &:disabled {
    background-color: indianred;
    border: 3px solid red;
    border-bottom: 5px solid red;
    cursor: default;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 35px;
  font-weight: bold;
  font-size: 30px;
  color: white;
  outline: none;
  text-shadow: 1px 1px 1px black;
  cursor: pointer;
`;
