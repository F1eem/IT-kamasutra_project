import styled from "@emotion/styled";

const WrapperPost = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  background-color: ghostwhite;
  width: 300px;
  border: 2px solid black;
  border-radius: 15px;
  padding: 5px;
`;
const PostImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  margin: 3px 5px;
`;

export { WrapperPost, PostImg };
