import React from "react";
import Form from "./form";
import { WrapperGalery } from "./units";
import { connect } from "react-redux";
import { withAuthRedirect } from "components/HOC/withAuthRedirect";
import { compose } from "redux";

const Gallery = ({ galleryPage }) => {
  const formElement = galleryPage.formData.map(({ text, name, color, key }) => (
    <Form key={key} text={text} name={name} color={color} />
  ));

  return <WrapperGalery>{formElement}</WrapperGalery>;
};

let mapStateToProps = ({ galleryPage, auth }) => ({
  galleryPage,
  isAuth: auth.isAuth,
});

export default compose(connect(mapStateToProps), withAuthRedirect)(Gallery);
