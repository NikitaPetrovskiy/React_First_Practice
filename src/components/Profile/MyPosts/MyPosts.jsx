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
                <Post message={`Hi! I'm First post!`} likesCount=" 10"/>
                <Post message={`It's Me! Second post!`} likesCount=" 3"/>
            </section>
        </section>
    )
};

export default MyPosts;