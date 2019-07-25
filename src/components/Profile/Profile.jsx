import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <section>
            <section>
                <img src="http://www.onwebbox.com/Content/onwebbox.com/Mngt/RealImage/834Online-Banner-Maker.jpg" alt="banner"/>
            </section>
            <section>
                avatar + descr
            </section>
            <MyPosts/>
        </section>
    )
};

export default Profile;