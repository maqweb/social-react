import React, {useEffect, useState} from "react";
import './../../../App.css'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activeteMode = () => {
        setEditMode(true)
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    };

    return (
        <div className="styleStatus">
            {!editMode &&
            <div>
                <span onDoubleClick={activeteMode}> {props.status || '----'}</span>
            </div>
            }

            {editMode &&
            <div>
                <input autoFocus={true}
                       onChange={onStatusChange}
                       onBlur={deactivateEditMode}
                       value={status}/>
            </div>
            }
        </div>
    )
};

export default ProfileStatusWithHooks;