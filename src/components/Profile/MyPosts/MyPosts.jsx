import React from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const AddPostTextForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   placeholder='Enter your post'
                   name='newPostText'
                   validate={[required, maxLength10]}/>

            <button> Add post</button>
        </form>
    )
};

const AddPostTextReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddPostTextForm);

const MyPosts = React.memo(props => {

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
});


export default MyPosts;