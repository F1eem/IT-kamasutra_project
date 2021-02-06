import React, { useEffect, useState } from "react";
import userAvatar from "../../assets/img/avatar.png";
import { WrapperName, WrapperPageNumber, WrapperUsersForm } from "./units";
import { Preloader } from "../../Preloader";
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

let pageNumber = [];

const Users = ({
  users,
  totalCount,
  pageSize,
  currentUsersPage,
  setCurrentPage,
  isFetching,
  getUser,
  delFollowSuccess,
  addFollowSuccess,
  toggleFollowingProgress,
}) => {
  useEffect(() => {
    getUser(pageSize, currentUsersPage);
  }, []);

  const [activePage, setActivePage] = useState(0);

  let userPageCount = Math.ceil(totalCount / pageSize);

  for (let p = 1; p <= userPageCount; p++) {
    pageNumber.push(p);
  }

  const onCurrentPageChange = (page) => {
    setCurrentPage(page);
    getUser(pageSize, page);
  };

  return (
    <div>
      <div>
        {pageNumber.map((p, i) => (
          <WrapperPageNumber
            key={p.id}
            active={i === activePage}
            onClick={() => {
              onCurrentPageChange(p);
              setActivePage(i);
            }}
          >
            {p}
          </WrapperPageNumber>
        ))}
      </div>

      {isFetching ? (
        <Preloader />
      ) : (
        <div>
          {users.map(({ id, photos, followed, name, status, key }) => (
            <WrapperUsersForm key={key}>
              <div>
                <div>
                  <NavLink to={"/profile/ " + id}>
                    <img
                      alt="Аватар"
                      src={photos.small ? photos.small : userAvatar}
                      height="70 px"
                    />
                  </NavLink>
                </div>
                <div>
                  {followed ? (
                    <button
                      disabled={toggleFollowingProgress.some(
                        (id) => id === { id }
                      )}
                      onClick={() => {
                        delFollowSuccess(id);
                      }}
                    >
                      Follow
                    </button>
                  ) : (
                    <button
                      disabled={toggleFollowingProgress.some(
                        (id) => id === { id }
                      )}
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
                <div>
                  <WrapperName>{name}</WrapperName>
                  <div>{status}</div>
                </div>
                <div>
                  <div>{"e.location.city"}</div>
                  <div>{"e.location.country"}</div>
                </div>
              </div>
            </WrapperUsersForm>
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ usersPage, auth }) => {
  return {
    users: usersPage.users,
    totalCount: usersPage.totalCount,
    pageSize: usersPage.pageSize,
    currentUsersPage: usersPage.currentUsersPage,
    isFetching: usersPage.isFetching,
    toggleFollowingProgress: usersPage.toggleFollowingProgress,
    isAuth: auth.isAuth,
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
