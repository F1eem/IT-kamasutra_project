import React, { useState } from "react";
import { WrapperProfileDataForm } from "./units";

const ProfileDataForm = ({
  updateUserData,
  setEditModeProfileData,
  profile,
}) => {
  const onSubmit = (contacts) => {
    updateUserData(contacts);
    setEditModeProfileData(false);
  };
  const [localFormData, setLocalFormData] = useState({ ...profile });
  return (
    <WrapperProfileDataForm>
      Имя
      <input
        value={localFormData.fullName}
        onChange={(e) =>
          setLocalFormData({ ...localFormData, fullName: e.target.value })
        }
      />
      Обо мне
      <input
        value={localFormData.aboutMe}
        onChange={(e) =>
          setLocalFormData({ ...localFormData, aboutMe: e.target.value })
        }
      />
      Looking for a job
      <input
        type={"checkbox"}
        checked={localFormData.lookingForAJob}
        onChange={() =>
          setLocalFormData({
            ...localFormData,
            lookingForAJob: !localFormData.lookingForAJob,
          })
        }
      />
      Description
      <input
        value={localFormData.lookingForAJobDescription}
        onChange={(e) =>
          setLocalFormData({
            ...localFormData,
            lookingForAJobDescription: e.target.value,
          })
        }
      />
      <b>Contacts:</b>
      Github:
      <input
        value={localFormData.contacts.github}
        onChange={(e) =>
          setLocalFormData({
            ...localFormData,
            contacts: { ...localFormData.contacts, github: e.target.value },
          })
        }
      />
      Vk:
      <input
        value={localFormData.contacts.vk}
        onChange={(e) =>
          setLocalFormData({
            ...localFormData,
            contacts: { ...localFormData.contacts, vk: e.target.value },
          })
        }
      />
      Facebook:
      <input
        value={localFormData.contacts.facebook}
        onChange={(e) =>
          setLocalFormData({
            ...localFormData,
            contacts: { ...localFormData.contacts, facebook: e.target.value },
          })
        }
      />
      Instagram:
      <input
        value={localFormData.contacts.instagram}
        onChange={(e) =>
          setLocalFormData({
            ...localFormData,
            contacts: { ...localFormData.contacts, instagram: e.target.value },
          })
        }
      />
      Twitter:
      <input
        value={localFormData.contacts.twitter}
        onChange={(e) =>
          setLocalFormData({
            ...localFormData,
            contacts: { ...localFormData.contacts, twitter: e.target.value },
          })
        }
      />
      Website:
      <input
        value={localFormData.contacts.website}
        onChange={(e) =>
          setLocalFormData({
            ...localFormData,
            contacts: { ...localFormData.contacts, website: e.target.value },
          })
        }
      />
      Youtube:
      <input
        value={localFormData.contacts.youtube}
        onChange={(e) =>
          setLocalFormData({
            ...localFormData,
            contacts: { ...localFormData.contacts, youtube: e.target.value },
          })
        }
      />
      MainLink:
      <input
        value={localFormData.contacts.mainLink}
        onChange={(e) =>
          setLocalFormData({
            ...localFormData,
            contacts: { ...localFormData.contacts, mainLink: e.target.value },
          })
        }
      />
      <button onClick={() => onSubmit(localFormData)}>Save</button>
    </WrapperProfileDataForm>
  );
};

export default ProfileDataForm;
