import React from 'react';
import style from "../Profile.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={style.img}
                     src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                     alt=""/>
            </div>
            <div className={style.description}>
                ava + description
            </div>
        </div>
    )
};

export default ProfileInfo;