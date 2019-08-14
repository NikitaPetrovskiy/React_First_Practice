import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <section>
            <ProfileInfo/>
            <MyPostsContainer />
        </section>
    )
};

export default Profile;