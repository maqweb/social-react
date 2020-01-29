import React from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css';
import {Field, reduxForm} from "redux-form";

const AddPostTextForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea'
                   placeholder='Enter your post'
                   name='newPostText'/>

            <button> Add post</button>
        </form>
    )
};

const AddPostTextReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddPostTextForm);

const MyPosts = (props) => {

    let postsElement = props.profilePage.posts.map(p => <Post message={p.message}
                                                              likesCount={p.likesCount}
                                                              key={p.id}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={style.postWrap}>
            <h3 className={style.postTitle}>My posts</h3>

            <AddPostTextReduxForm onSubmit={onAddPost}/>
            <div className={style.posts}>
                {postsElement}
            </div>
        </div>
    )
};



export default MyPosts;