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
  meId,
}) => {
  const { userId } = useParams();

  useEffect(() => {
    getUserStatus(userId || meId);
    getUserProfile(userId || meId);
  }, []);

  return (
    <WrapperMainScreen>
      <ProfileInfo {...profilePage} updateUserStatus={updateUserStatus} />
      <MyPosts />
    </WrapperMainScreen>
  );
};

const mapStateToProps = ({ profilePage, auth }) => ({
  profilePage,
  isAuth: auth.isAuth,
  meId: auth.id,
});
export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withAuthRedirect
)(Profile);
