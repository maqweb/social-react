import React from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css';

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action);
    };

    return (
        <div className={style.postWrap}>
            <h3 className={style.postTitle}>My posts</h3>
            <div>
                <textarea ref={newPostElement}
                          onChange={onPostChange}
                          value={props.newPostText}/>

                <button onClick={addPost}> Add post</button>
            </div>

            <div className={style.posts}>
                {postsElement}
            </div>
        </div>
    )
};

export default MyPosts;