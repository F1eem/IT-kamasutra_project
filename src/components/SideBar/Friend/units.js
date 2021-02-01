import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding: 2px;
  justify-content: center;
  align-items: center;
  width: 45px;
`;

const Round = styled.div`
  background-color: yellow;
  border-radius: 50%;
  height: 35px;
  width: 35px;
`;

export { Round, Wrapper };
