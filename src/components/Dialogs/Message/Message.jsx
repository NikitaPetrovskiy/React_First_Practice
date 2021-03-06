import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={styles.message}> {props.textMessage} </div>
    )
}

export default Message;