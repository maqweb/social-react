import React from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css';

const MyPosts = (props) => {

  let postsElement = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

  return (
    <div className={style.postWrap}>
      <h3>My posts</h3>
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>

        <div className={style.posts}>
          { postsElement }
        </div>
    </div>
  )
};

export default MyPosts;