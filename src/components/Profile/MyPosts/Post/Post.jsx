import React from 'react';
import styles from './Post.module.css'

const Post = (props) => {
    return (
        <div className={styles.item}>
            <img src="http://steamavatars.co/?media_dl=853" alt="avatar"/>
            {props.message}
            <div>
                <span>
                    Like
                    {props.like}
                </span>
            </div>
        </div>
    )
};

export default Post;