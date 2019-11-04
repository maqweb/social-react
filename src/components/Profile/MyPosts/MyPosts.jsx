import React from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div>
      My posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>

        <div className={style.posts}>
          <Post message="Hello React!" likesCount="20"/>
          <Post message="It's nice work" likesCount="10"/>
        </div>  
    </div>
  )
}

export default MyPosts;