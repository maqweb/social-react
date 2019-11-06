import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={style.dialog}>
            <NavLink to={"/dialogs/" + props.id}> {props.name} </NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={style.message}> {props.message} </div>
    )
};

const Dialogs = () => {

    let dialogsData = [
        { id: 1, name: 'Empty'},
        { id: 2, name: 'Asdf'},
        { id: 3, name: 'Qwer'},
        { id: 4, name: 'Qaz'},
    ];

    let messageData = [
        { id: 1, message: 'Hello React' },
        { id: 2, message: 'Nice work!' },
        { id: 3, message: 'Let\'s do it!' },
    ];

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
            </div>
            <div className={style.messages}>
                <Message message={messageData[0].message} id={messageData[0].id}/>
                <Message message={messageData[1].message} id={messageData[1].id}/>
                <Message message={messageData[2].message} id={messageData[2].id}/>
            </div>
        </div>
    )
};

export default Dialogs;