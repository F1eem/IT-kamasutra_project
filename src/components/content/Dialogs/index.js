import React from "react";
import {Message} from "./Message";
import {DialogItem} from "./DialogItem";
import {
    WrapperDialogs,
    WrapperDialogsItems,
    WrapperMessageItems,
} from "./units";
import {compose} from "redux";
import {connect} from "react-redux";
import {onSendMessageClick, updateNewMessageText} from "../../../redux/dialogsReducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";



const Dialogs = ({ dialogPage,onSendMessageClick,updateNewMessageText}) => {

    let dialogElements = dialogPage.dialogData.map((dialog) => (
        <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>
    ));

    let messageElements = dialogPage.messageData.map((message) => (
        <Message message={message.message}/>
    ));

    let onNewMessageChange = (e) => {
        let text = e.target.value;
        updateNewMessageText(text);
    }

    return (
        <WrapperDialogs>
            <WrapperDialogsItems>{dialogElements}</WrapperDialogsItems>
            <WrapperMessageItems>
                {messageElements}
                <textarea value={dialogPage.newMessageText}
                          onChange={onNewMessageChange}/>
                <button onClick={onSendMessageClick}>Add message</button>
            </WrapperMessageItems>
        </WrapperDialogs>
    );
};

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth,
    };
};
export default compose(
    connect(mapStateToProps, {
        onSendMessageClick,
        updateNewMessageText,
    }),
    withAuthRedirect
)(Dialogs);
