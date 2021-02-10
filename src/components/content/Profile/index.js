import React, { useEffect } from "react";
import ProfileInfo from "./profileInfo";
import { WrapperMainScreen } from "./units";
import MyPosts from "./MyPosts/index";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
} from "redux/profileReducer";
import { withAuthRedirect } from "components/HOC/withAuthRedirect";

const Profile = ({
  updateUserStatus,
  getUserStatus,
  getUserProfile,
  profilePage,
  id,
}) => {
  const { userId } = useParams();

  useEffect(() => {
    getUserStatus(userId || id);
    getUserProfile(userId || id);
  }, []);

  return (
    <WrapperMainScreen>
      <ProfileInfo {...profilePage} {...{ updateUserStatus }} />
      <MyPosts />
    </WrapperMainScreen>
  );
};

const mapStateToProps = ({ profilePage, auth: { isAuth, id } }) => ({
  profilePage,
  isAuth,
  id,
});
export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withAuthRedirect
)(Profile);
