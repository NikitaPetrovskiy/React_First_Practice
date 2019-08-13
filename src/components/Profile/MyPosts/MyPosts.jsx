import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";


const MyPosts = (props) => {
    const postsElements = props.posts
        .map(post =>  <Post id={post.id} message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <section className={styles.content}>
            <h2>my posts</h2>
            <section>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </section>
            <section className={styles.posts}>
                {postsElements}
            </section>
        </section>
    )
};

export default MyPosts;