import React from 'react';
import styles from './Friends.module.css'
import {NavLink} from "react-router-dom";
import FriendItem from "./FriendItem/FriendItem";

const Friends = (props) => {
    return (
        <section>
            <FriendItem friendsList={props.store.friends}/>
            <div>
                <img className={styles.avator} src="https://marathonandsprint.files.wordpress.com/2013/03/yoda3.jpg" alt="avetar"/>
                <NavLink>Andrey</NavLink>
            </div>
        </section>
    )
}
// export default Friends;