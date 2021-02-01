import React, { useEffect, useState } from "react";
import userAvatar from "../../assets/img/avatar.png";
import { WrapperName, WrapperPageNumber, WrapperUsersForm } from "./units";
import { Preloader } from "../../Preloader";
import { NavLink } from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {
  addFollowSuccess,
  delFollowSuccess,
  getUser,
  setCurrentPage,
  setTotalCount,
  setUsers,
  toggleFollow,
  toggleIsFetching
} from "../../../redux/usersReducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

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

  let pageNumber = [];
  for (let p = 1; p <= userPageCount; p++) {
    pageNumber.push(p);
  }

  let onCurrentPageChange = (page) => {
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
          {users.map((e) => (
            <WrapperUsersForm key={e.id}>
              <div>
                <div>
                  <NavLink to={"/profile/ " + e.id}>
                    <img
                      alt="Аватар"
                      src={e.photos.small ? e.photos.small : userAvatar}
                      height="70 px"
                    />
                  </NavLink>
                </div>
                <div>
                  {e.followed ? (
                    <button
                      disabled={toggleFollowingProgress.some(
                        (id) => id === e.id
                      )}
                      onClick={() => {
                        delFollowSuccess(e.id);
                      }}
                    >
                      Follow
                    </button>
                  ) : (
                    <button
                      disabled={toggleFollowingProgress.some(
                        (id) => id === e.id
                      )}
                      onClick={() => {
                        addFollowSuccess(e.id);
                      }}
                    >
                      Unfollow
                    </button>
                  )}
                </div>
              </div>
              <div>
                <div>
                  <WrapperName>{e.name}</WrapperName>
                  <div>{e.status}</div>
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

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    pageSize: state.usersPage.pageSize,
    currentUsersPage: state.usersPage.currentUsersPage,
    isFetching: state.usersPage.isFetching,
    toggleFollowingProgress: state.usersPage.toggleFollowingProgress,
    isAuth: state.auth.isAuth,
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
