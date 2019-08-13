import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";


const Dialogs = (props) => {
    let state = props.dialogsPage;
    const dialogsElements = state.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    const messagesElements = state.messagesData
        .map(message => <Message textMessage={message.message} id={message.id}/>);
    let newMessageBody = state.newMessageBody;

    const onSendMessageClick = () => {
        props.sendMessage();
    }
    const onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <section>
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={styles.messages}>
                    <div>{messagesElements}</div>
                    <div>
                        <div><textarea placeholder="Enter your message" value={ newMessageBody } onChange={ onNewMessageChange }></textarea></div>
                        <div><button onClick={ onSendMessageClick }>Send message</button></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dialogs;