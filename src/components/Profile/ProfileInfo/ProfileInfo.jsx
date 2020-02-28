import React from 'react';
import style from "../Profile.module.css";
import Preloader from "../../common/preloader/Preloader";
import checkmark from '../../../assets/images/tick.png';
import cancel from '../../../assets/images/cancel.png'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={style.description}>
                <img alt="" src={profile.photos.large}/>
                <div>About me: {profile.aboutMe}</div>

                <div className={style.jobLooking}>
                    <span>Lookin for a job:</span>
                    {profile.lookingForAJob ?
                        <img alt="" className={style.jobIcon} src={checkmark}/> :
                        <img alt="" className={style.jobIcon} src={cancel}/>}
                </div>

                <div className={style.fullName}>
                    <span>Full Name: {profile.fullName}</span>
                </div>

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
};

export default ProfileInfo;