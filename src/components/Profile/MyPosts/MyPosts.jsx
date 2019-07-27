import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    const postsData = [
        {id: 1, messages: 'Hi! I\'m First post!', likesCount: 10},
        {id: 2, messages: 'It\'s Me! Second post!', likesCount: 3},
        {id: 3, messages: 'It\'s new post made with using .map()! ', likesCount: 1000},
    ];
    const postsElements = postsData
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