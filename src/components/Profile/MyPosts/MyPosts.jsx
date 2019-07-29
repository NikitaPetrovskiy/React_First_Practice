import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    const postsElements = props.postsData
        .map(post =>  <Post id={post.id} message={post.messages} likesCount={post.likesCount}/>);
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
                {postsElements}
            </section>
        </section>
    )
};

export default MyPosts;