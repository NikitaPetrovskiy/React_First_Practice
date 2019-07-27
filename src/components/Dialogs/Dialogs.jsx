import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div className={`${styles.dialog} ${styles.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const MessageItem = (props) => {
    return (
        <div className={styles.message}>
            {props.textMessage}
        </div>
    )
}

const Dialogs = (props) => {
    const dialogsData =[
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Masha'},
        {id: 5, name: 'Jenia'},
    ];
    const messagesData = [
        {id: 1, messages: "Hi!"},
        {id: 2, messages: "Hello my Maaan!"},
        {id: 3, messages: "Thank you!"},
        {id: 4, messages: "Yo!"},
        {id: 5, messages: "Good bye!"},
    ];

    const dialogsElements = dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    const messagesElements = messagesData
        .map(message => <MessageItem textMessage={message.messages} id={message.id}/>);

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