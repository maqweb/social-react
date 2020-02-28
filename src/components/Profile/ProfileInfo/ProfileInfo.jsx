import React, {useState} from 'react';
import style from "../Profile.module.css";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
    };

    return (
        <div>
            <div className={style.description}>
                <img alt="" src={profile.photos.large}/>
                {isOwner && <input type={'file'}/>}

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>}

            </div>
        </div>
    )
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div>
                <button onClick={goToEditMode}>Edit</button>
            </div>}
            <div className={style.fullName}>
                <span><b>Full name:</b>{profile.fullName}</span>
            </div>

            <div>
                <b>Lookin for a job:</b>{profile.lookingForAJob ? 'Yes' : 'No'}
            </div>

            <div>
                <b>My professional skills</b>{profile.lookingForAJobDescription}
            </div>

            <div>
                <b>About me:</b>{profile.aboutMe}
            </div>

            <div>
                <b>Contacts:</b>{Object.keys(profile.contacts).map(key => {
                return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
};


const Contacts = ({contactTitle, contactValue}) => {
    return (
        <div className={style.contacts}>
            <b>{contactTitle}:</b> {contactValue}
        </div>
    )
};

export default ProfileInfo;