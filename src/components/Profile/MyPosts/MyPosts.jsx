import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <section>
            my posts
            <section>
                new post
            </section>
            <section className={styles.posts}>
                <Post/>
                <Post/>
            </section>
        </section>
    )
};

export default MyPosts;