import React from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css';

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    };

    return (
        <div className={style.postWrap}>
            <h3 className={style.postTitle}>My posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
                <div>
                    <button onClick={addPost}> Add post</button>
                </div>
            </div>

            <div className={style.posts}>
                {postsElement}
            </div>
        </div>
    )
};

export default MyPosts;