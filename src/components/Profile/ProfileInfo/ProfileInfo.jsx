import React from 'react';
import style from "../Profile.module.css";
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className={style.img}
                     src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                     alt=""/>
            </div>
            <div className={style.description}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    )
};

export default ProfileInfo;