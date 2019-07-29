import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    const dialogsElements = props.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    const messagesElements = props.messagesData
        .map(message => <Message textMessage={message.messages} id={message.id}/>);

    return (
        <section>
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={styles.messages}>
                    {messagesElements}
                </div>
            </div>
        </section>
    )
}

export default Dialogs;