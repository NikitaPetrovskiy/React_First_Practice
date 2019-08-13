import React from 'react';
import { NavLink } from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    const onNewMessageChange = (body) => {
        props.store.dispatch( updateNewMessageBodyCreator(body) );
    }

    return ( <Dialogs updateNewMessageBody={onNewMessageChange}
                      sendMessage={onSendMessageClick} dialogsPage={state}/> )
}

export default DialogsContainer;