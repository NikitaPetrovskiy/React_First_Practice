import React from 'react';
import styles from './FriendItem.module.css'
import {NavLink} from "react-router-dom";

const FriendItem = (props) => {

    return (
        <div>
            <img className={styles.avator} src={props.friends.url} alt="avetar"/>
            <NavLink></NavLink>
        </div>
    )
}
// export default FriendItem;