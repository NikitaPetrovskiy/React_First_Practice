import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    debugger;
    return (
        <section>
            <ProfileInfo/>
            <MyPostsContainer store={props.store} />
        </section>
    )
};

export default Profile;