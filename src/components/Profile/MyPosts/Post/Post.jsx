import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
  return (
    <div className={style.item}>
        <img src="https://avatars.mds.yandex.net/get-pdb/1025945/86f10e6d-eab5-4572-8c07-c672b854d2a5/s1200?webp=false"
             alt=""/>
      { props.message }
      <div>
        <span>Likes { props.likesCount }</span>
      </div>
    </div>
  )
}

export default Post;