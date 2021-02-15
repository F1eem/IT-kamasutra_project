import React from "react";
import loader from "components/assets/img/loader.gif";
import { WrapperPreloader } from "./unit";

export const Preloader = () => {
  return <WrapperPreloader alt="Preloader" src={loader} />;
};
