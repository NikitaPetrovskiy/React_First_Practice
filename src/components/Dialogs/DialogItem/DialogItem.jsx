import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './../Dialogs.module.css';

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div className={`${styles.dialog} ${styles.active}`}>
            <img src="https://marathonandsprint.files.wordpress.com/2013/03/yoda3.jpg" alt='avatar'/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;