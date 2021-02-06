import React, { useState } from "react";
import {
  AddPhotoInput,
  Album,
  DelButton,
  Filter,
  GalleryWrapper,
  Img,
  Photo,
  PhotosWrapper,
  Title,
} from "./units";
import { connect } from "react-redux";
import {
  getPhotos,
  delPhoto,
  addPhoto,
  updateUrlText,
} from "redux/galleryReducer";
import { Preloader } from "components/Preloader";
import { MyDropdown } from "components/MyDropdown";
let options = [
  {
    elem: "All",
    id: 0,
  },
  {
    elem: "Automobile",
    id: 1,
  },
  {
    elem: "Animal",
    id: 2,
  },
  {
    elem: "Nature",
    id: 3,
  },
  {
    elem: "1",
    id: 4,
  },
  {
    elem: "Space",
    id: 5,
  },
];

const Gallery = ({
  galleryPage,
  getPhotos,
  delPhoto,
  addPhoto,
  updateUrlText,
}) => {
  const [elem, setElem] = useState(options[0].elem);
  const [visible, setVisible] = useState(false);
  const dropdownClickHandler = (elem) => {
    setElem(elem);
    setVisible(false);
  };
  return (
    <GalleryWrapper>
      <div>
        <AddPhotoInput
          onChange={(e) => updateUrlText(e.target.value)}
          value={galleryPage.newUrlText}
          placeholder="Enter URL"
        />
        <button onClick={addPhoto}>Add</button>
        <button onClick={getPhotos}>Load from server</button>
        <Filter>
          <div>
            Выберите категорию: <b onClick={() => setVisible(true)}> {elem} </b>
          </div>
          {visible && (
            <MyDropdown
              options={options}
              placeholder={"Введите категорию"}
              onClickItem={dropdownClickHandler}
            />
          )}
        </Filter>
      </div>
      <PhotosWrapper>
        {galleryPage.isFetching ? (
          <Preloader />
        ) : elem === "All" ? (
          galleryPage.photos.map(({ key, url, albumId, title, id }) => (
            <Photo key={key}>
              <Img src={url} />
              <Album>Album: {albumId}</Album>
              <Title>{title}</Title>
              <DelButton onClick={() => delPhoto(id)}>Delete</DelButton>
            </Photo>
          ))
        ) : (
          galleryPage.photos.reduce((total, amount) => {
            if (amount.albumId == elem) {
              total.push(
                <Photo>
                  <Img src={amount.url} />
                  <Album>Album: {amount.albumId}</Album>
                  <Title>{amount.title}</Title>
                  <DelButton onClick={() => delPhoto(amount.id)}>
                    Delete
                  </DelButton>
                </Photo>
              );
            }
            return total;
          }, [])
        )}
      </PhotosWrapper>
    </GalleryWrapper>
  );
};

const mapStateToProps = ({ galleryPage }) => ({ galleryPage });

export default connect(mapStateToProps, {
  getPhotos,
  delPhoto,
  addPhoto,
  updateUrlText,
})(Gallery);
