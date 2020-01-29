import React from 'react';
import style from "../Profile.module.css";
import Preloader from "../../common/preloader/Preloader";
import checkmark from '../../../assets/images/tick.png';
import cancel from '../../../assets/images/cancel.png'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={style.description}>
                <img alt="" src={props.profile.photos.large}/>
                <div>About me: {props.profile.aboutMe}</div>

                <div className={style.jobLooking}>
                    <span>Lookin for a job</span>
                    {props.profile.lookingForAJob ?
                        <img alt="" className={style.jobIcon} src={checkmark}/> :
                        <img alt="" className={style.jobIcon} src={cancel}/>}
                </div>


                <div className={style.fullName}>
                    <span>Full Name: {props.profile.fullName}</span>
                </div>

                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
};

export default ProfileInfo;