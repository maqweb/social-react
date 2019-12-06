import React from 'react';
import style from "../Profile.module.css";
import Preloader from "../../common/preloader/Preloader";
import checkmark from '../../../assets/images/tick.png';
import cancel from '../../../assets/images/cancel.png'

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
                <div>About me: {props.profile.aboutMe}</div>

                <div className={style.jobLooking}>
                    <span>Lookin for a job</span>
                    {props.profile.lookingForAJob ?
                        <img className={style.jobIcon} src={checkmark}/> :
                        <img className={style.jobIcon} src={cancel}/>}
                </div>

                <div>
                    <span>Full Name: {props.profile.fullName}</span>
                </div>

                <div>ava + description</div>
            </div>
        </div>
    )
};

export default ProfileInfo;