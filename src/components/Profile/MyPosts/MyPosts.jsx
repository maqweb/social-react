import React from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css';

const MyPosts = () => {

  let postsData = [
    { id: 1, message: 'Hello React!', likesCount: 23 },
    { id: 1, message: 'It\'s nice work', likesCount: 11 },
  ];

  return (
    <div className={style.postWrap}>
      <h3>My posts</h3>
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>

        <div className={style.posts}>
          <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
          <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>1
        </div>
    </div>
  )
};

export default MyPosts;