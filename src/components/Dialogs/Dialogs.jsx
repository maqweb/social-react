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
        <div> {props.message} </div>
    )
};

const Dialogs = () => {

    let dialogsData = [
        { id: 1, name: 'Empty'},
        { id: 2, name: 'Asdf'},
        { id: 3, name: 'Qwer'},
        { id: 4, name: 'Qaz'},
    ];

    let messagesData = [
        { id: 1, message: 'Hello React' },
        { id: 2, message: 'Nice work!' },
        { id: 3, message: 'Let\'s do it!' },
    ];

    let dialogsElements = dialogsData.map( d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = messagesData.map( m => <Message message={m.message} id={m.id}/>);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={style.messages}>
                { messageElements }
            </div>
        </div>
    )
};

export default Dialogs;