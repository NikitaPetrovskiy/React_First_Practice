import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <section>
            <ProfileInfo/>
            <MyPosts profilePage={props.state.profilePage} dispatch={props.dispatch} />
        </section>
    )
};

export default Profile;