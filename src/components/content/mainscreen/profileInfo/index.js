import React, {useEffect, useState} from "react";
import { WrapperDiscription } from "./units";
import { Preloader } from "../../../Preloader";

const ProfileInfo = ({profile,status,updateUserStatus}) => {
  const [editMode, setEditMode] = useState(false);
  const [newStatus,setNewStatus] = useState(status);

  useEffect(() => {
    setNewStatus(status)
  }, [status]);

  if (!profile) {
    return <Preloader />;
  } else
    return (
      <>
        {/*<img alt='Пусто' src="https://yahont-hotel.ru/ckeditor_images/chernomorskoje_vid.jpg"*/}
        {/*     height='300px'/>*/}
        <WrapperDiscription>
          <img src={profile.photos.large} />
          <div>
            <div>
              <b>Имя:</b> {profile.fullName}
            </div>
            <div>
              <b>Обо мне:</b> {profile.aboutMe}
            </div>
          </div>
        </WrapperDiscription>
            {!editMode && (
          <div>
          <span onDoubleClick={() => setEditMode(true)}>{status|| '----'}</span>
          </div>
          )}
        {editMode && (
          <div>
          <input
          autoFocus={true}
          onBlur={() => {
          setEditMode(false);
          updateUserStatus(newStatus)
        }}
          value={newStatus}
          onChange={(e) => setNewStatus(e.target.value)}
          />
          </div>
          )}
      </>
    );
};

export { ProfileInfo };