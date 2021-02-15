import React, { useEffect } from "react";
import userAvatar from "../../assets/img/avatar.png";
import { UserName, UserForm, WrapperUsers, WrapperUsersPage } from "./units";
import { Preloader } from "../../common/Preloader";
import { NavLink } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  addFollowSuccess,
  delFollowSuccess,
  getUser,
  setCurrentPage,
  setTotalCount,
  setUsers,
  toggleFollow,
  toggleIsFetching,
} from "redux/usersReducer";
import { withAuthRedirect } from "components/HOC/withAuthRedirect";
import Paginator from "../../common/Paginator";

const Users = ({
  users,
  totalCount,
  pageSize,
  currentPage,
  setCurrentPage,
  isFetching,
  getUser,
  delFollowSuccess,
  addFollowSuccess,
  toggleFollowingProgress,
}) => {
  useEffect(() => {
    getUser(pageSize, currentPage);
  }, [currentPage]);
  return (
    <WrapperUsersPage>
      <Paginator {...{ setCurrentPage, pageSize, totalCount, currentPage }} />
      {isFetching ? (
        <Preloader />
      ) : (
        <WrapperUsers>
          {users.map(({ id, photos, followed, name, status }) => (
            <UserForm key={id}>
              <UserName>{name}</UserName>
              <div>
                <NavLink to={"/profile/ " + id}>
                  <img
                    alt="Аватар"
                    src={photos.small ? photos.small : userAvatar}
                    height="70 px"
                  />
                </NavLink>
                <div>
                  {followed ? (
                    <button
                      disabled={toggleFollowingProgress.some((e) => e === id)}
                      onClick={() => {
                        delFollowSuccess(id);
                      }}
                    >
                      Follow
                    </button>
                  ) : (
                    <button
                      disabled={toggleFollowingProgress.some((e) => e === id)}
                      onClick={() => {
                        addFollowSuccess(id);
                      }}
                    >
                      Unfollow
                    </button>
                  )}
                </div>
              </div>
              <div>
                <div>Status:{status || "----"}</div>
                <div>
                  <div>{"e.location.city"}</div>
                  <div>{"e.location.country"}</div>
                </div>
              </div>
            </UserForm>
          ))}
        </WrapperUsers>
      )}
    </WrapperUsersPage>
  );
};

const mapStateToProps = ({
  usersPage: {
    users,
    totalCount,
    pageSize,
    currentPage,
    isFetching,
    toggleFollowingProgress,
  },
  auth: { isAuth },
}) => {
  return {
    users,
    totalCount,
    pageSize,
    currentPage,
    isFetching,
    toggleFollowingProgress,
    isAuth,
  };
};

export default compose(
  connect(mapStateToProps, {
    toggleFollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    toggleIsFetching,
    getUser,
    delFollowSuccess,
    addFollowSuccess,
  }),
  withAuthRedirect
)(Users);
