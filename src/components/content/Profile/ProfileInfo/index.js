import React, { useEffect, useState } from "react";
import { WrapperProfileData, WrapperProfileInfo } from "./units";
import { Preloader } from "components/common/Preloader";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({
  profile,
  status,
  updateUserStatus,
  updateProfilePhoto,
  isOwner,
  updateUserData,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [localStatus, setLocalStatus] = useState(status);
  const [editModeProfileData, setEditModeProfileData] = useState(false);

  useEffect(() => {
    setLocalStatus(status);
  }, [status]);

  if (!profile) {
    return <Preloader />;
  } else
    return (
      <WrapperProfileInfo>
        <img alt="Avatar" src={profile.photos.large} />
        {isOwner && (
          <input
            type={"file"}
            onChange={(e) => updateProfilePhoto(e.target.files[0])}
          />
        )}
        {editMode ? (
          <div>
            <input
              autoFocus={true}
              onBlur={() => {
                setEditMode(false);
                updateUserStatus(localStatus);
              }}
              value={localStatus}
              onChange={(e) => setLocalStatus(e.target.value)}
            />
          </div>
        ) : (
          <div>
            <span onDoubleClick={() => setEditMode(true)}>
              <b>Status</b> : {status || "----"}
            </span>
          </div>
        )}
        {editModeProfileData ? (
          <ProfileDataForm
            {...{ updateUserData, setEditModeProfileData, profile }}
          />
        ) : (
          <ProfileData {...{ profile, setEditModeProfileData, isOwner }} />
        )}
      </WrapperProfileInfo>
    );
};

const ProfileData = ({ profile, isOwner, setEditModeProfileData }) => {
  return (
    <WrapperProfileData>
      <div>
        <b>Имя:</b> {profile.fullName}
      </div>
      <div>
        <b>Ищу работу:</b> <div>{profile.lookingForAJob ? "Yes" : "No"}</div>
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>Описание поиска работы:</b> {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>Contacts : </b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
        {isOwner && (
          <button onClick={() => setEditModeProfileData(true)}>
            Edit contacts
          </button>
        )}
      </div>
    </WrapperProfileData>
  );
};
const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      {contactTitle}: {contactValue}
    </div>
  );
};

export default ProfileInfo;
