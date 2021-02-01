import React from "react";
import Form from "./form";
import { WrapperGalery } from "./units";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";

const Gallery = ({ galleryPage }) => {
  let formElement = galleryPage.formData.map((f) => (
    <Form text={f.text} name={f.name} color={f.color} />
  ));

  return <WrapperGalery>{formElement}</WrapperGalery>;
};

let mapStateToProps = (state) => {
  return {
    galleryPage: state.galleryPage,
    isAuth: state.auth.isAuth,
  };
};

export default compose(connect(mapStateToProps), withAuthRedirect)(Gallery);
