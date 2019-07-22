import React from 'react';
import styles from './Post.module.css'

const Post = () => {
    return (
        <div className={styles.item}>
            <img src="http://steamavatars.co/?media_dl=853" alt="avatar"/>
            post1
            <div><span>Like</span></div>
        </div>
    )
};

export default Post;