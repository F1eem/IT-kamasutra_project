import styled from "@emotion/styled";

const WrapperRed = styled.div`
border: 1px solid black;
border-radius:50%;
  width: 50px;
  height: 50px;
  background-color: ${({light, color}) => light == 0 ? 'white' : color};
`;

export {  WrapperRed};
