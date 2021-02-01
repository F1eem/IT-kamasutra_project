import styled from "@emotion/styled";

const TestMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ghostwhite;
  padding: 5px;
`;

const MyButton = styled.button`
  background-color: ${({light}) => (light === 1 ? "red" : "white")};
`;

const ImgWrapper = styled.img `  
  border-radius: 25%;
  border: 2px solid red;
  width:200px;
`

export { TestMenuWrapper, MyButton, ImgWrapper };
