import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    const postsElements = props.profilePage.postsData
        .map(post =>  <Post id={post.id} message={post.messages} likesCount={post.likesCount}/>);
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch({ type: 'ADD-POST' });
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = { type: 'UPDATE-NEW-POST', newText: text};
        props.dispatch(action);
    }
    return (
        <section className={styles.content}>
            <h2>my posts</h2>
            <section>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.profilePage.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </section>
            <section className={styles.posts}>
                {postsElements}
            </section>
        </section>
    )
};

export default MyPosts;