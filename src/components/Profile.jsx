import React from 'react';
import styles from './Profile.module.css'

const Profile = () => {
    return (
        <article className={styles.profile}>
            <section>
                <img src="http://www.onwebbox.com/Content/onwebbox.com/Mngt/RealImage/834Online-Banner-Maker.jpg" alt="banner"/>
            </section>
            <section>
                avatar + descr
            </section>
            <section>
                my posts
                <section>
                    new post
                </section>
                <section className={styles.posts}>
                    <div className={styles.item}>post1</div>
                    <div className={styles.item}>post2</div>
                </section>
            </section>

        </article>
    )
};

export default Profile;