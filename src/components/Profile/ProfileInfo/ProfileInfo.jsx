import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <section>
            <section>
                <img src="http://www.onwebbox.com/Content/onwebbox.com/Mngt/RealImage/834Online-Banner-Maker.jpg" alt="banner"/>
            </section>
            <section className={styles.descriptionBlock}>
                avatar + descr
            </section>
        </section>
    )
}

export default ProfileInfo;