import React from "react";
import DialogItem from "./DialogItem";
import {
  WrapperDialogs,
  WrapperDialogsItems,
  WrapperMessageItems,
  Message,
} from "./units";
import { compose } from "redux";
import { connect } from "react-redux";
import { onSendMessageClick, updateNewMessageText } from "redux/dialogsReducer";
import { withAuthRedirect } from "components/HOC/withAuthRedirect";

const Dialogs = ({ dialogPage, onSendMessageClick, updateNewMessageText }) => {
  const dialogElements = dialogPage.dialogData.map(
    ({ key, name, id, avatar }) => <DialogItem {...{ key, name, id, avatar }} />
  );

  const messageElements = dialogPage.messageData.map(({ key, message }) => (
    <Message key={key}>{message}</Message>
  ));

  return (
    <WrapperDialogs>
      <WrapperDialogsItems>{dialogElements}</WrapperDialogsItems>
      <WrapperMessageItems>
        {messageElements}
        <textarea
          value={dialogPage.newMessageText}
          onChange={(e) => updateNewMessageText(e.target.value)}
        />
        <button onClick={onSendMessageClick}>Add message</button>
      </WrapperMessageItems>
    </WrapperDialogs>
  );
};

const mapStateToProps = ({ dialogPage, auth: { isAuth } }) => ({
  dialogPage,
  isAuth,
});

export default compose(
  connect(mapStateToProps, {
    onSendMessageClick,
    updateNewMessageText,
  }),
  withAuthRedirect
)(Dialogs);
