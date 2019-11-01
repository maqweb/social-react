import React from 'react';
import style from './Profile.module.css';

const Profile = () => {
  return (
    <div className={style.content}>
      <img className={style.img} src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
      <div>
        ava + description
        </div>
      <div>
        My posts
          <div>
          New post
          </div>
        <div>post 1</div>
        <div>post 2</div>
      </div>
    </div>
  )
}

export default Profile;