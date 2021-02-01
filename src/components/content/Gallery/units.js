import styled from "@emotion/styled";

export const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;
export const Photo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 350px;
  padding: 10px;
  margin: 5px;
  background-color: gainsboro;
  border-radius: 10px;
`;
export const PhotosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;
export const Img = styled.img`
  width: 250px;
  height: 250px;
`;
export const DelButton = styled.button`
  border-radius: 10px;
  border: 1px solid black;
  background-color: gray;
  color: white;
  text-shadow: 2px 2px 2px black;
  outline: none;
  cursor: pointer;
  position: relative;
  left: 110px;
`;
export const Title = styled.div`
  font-size: 12px;
`;
export const Album = styled.div`
  font-size: 10px;
  position: relative;
  bottom: 10px;
  left: 110px;
`;
export const AddPhotoInput = styled.input`
  margin: 0px 15px;
  padding: 10px;
  width: 300px;
  border-radius: 10px;
  border: 1px solid gainsboro;
  outline: none;
`;
export const Filter = styled.div`
  margin: 10px 15px;
`;
