import React from 'react';
import {NavLink} from "react-router-dom";
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
    return (
        <section>
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    <DialogItem name="Sasha" id="1"/>
                    <DialogItem name="Dima" id="2"/>
                    <DialogItem name="Andrey" id="3"/>
                    <DialogItem name="Masha" id="4"/>
                    <DialogItem name="Jenia" id="5"/>
                </div>
                <div className={styles.messages}>
                    <MessageItem textMessage="Hi!"/>
                    <MessageItem textMessage="Hello!"/>
                    <MessageItem textMessage="Thank you!"/>
                    <MessageItem textMessage="Good bye!"/>
                </div>
            </div>
        </section>
    )
}

export default Dialogs;