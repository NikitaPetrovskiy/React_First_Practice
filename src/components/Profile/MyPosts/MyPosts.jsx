import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <section className={styles.content}>
            <h2>my posts</h2>
            <section>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </section>
            <section className={styles.posts}>
                <Post message={`Hi! I'm First post!`} likesCount=" 10"/>
                <Post message={`It's Me! Second post!`} likesCount=" 3"/>
            </section>
        </section>
    )
};

export default MyPosts;