import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <section>
            <ProfileInfo/>
            <MyPosts/>
        </section>
    )
};

export default Profile;