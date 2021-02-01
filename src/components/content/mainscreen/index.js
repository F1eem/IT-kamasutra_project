import React, { useEffect } from "react";
import { ProfileInfo } from "./profileInfo";
import { WrapperMainScreen } from "./units";
import MyPosts from "./MyPosts/index";
import { useParams } from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {getUserProfile,getUserStatus,updateUserStatus} from "../../../redux/profileReducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


const MainScreen = ({ updateUserStatus,getUserStatus,getUserProfile, profilePage }) => {
  let { userId } = useParams();
  if (!userId) {
    userId = 13107;
  }
  useEffect(() => {
    getUserStatus(userId);
    getUserProfile(userId);
  }, []);

  return (
    <WrapperMainScreen>
      <ProfileInfo {...profilePage} updateUserStatus={updateUserStatus} />
      <MyPosts />
    </WrapperMainScreen>
  );
};

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    isAuth: state.auth.isAuth,
  };
};
export default compose(
    connect(mapStateToProps, { getUserProfile,getUserStatus,updateUserStatus }),
    withAuthRedirect
)(MainScreen);
