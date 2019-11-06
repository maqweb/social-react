import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={style.dialog}>
      <NavLink to={"/dialogs/" + props.id }> { props.name } </NavLink>
    </div>
  )
};

const Message = (props) => {
  return (
    <div className={style.message}> { props.message } </div>
  )
};

const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>

        <DialogItem name="Empty" id="1"/>
        <DialogItem name="Asdf" id="2"/>
        <DialogItem name="Qwer" id="3"/>
        <DialogItem name="Qaz" id="4"/>


      </div>
      <div className={style.messages}>
        <Message message="Hello React!"/>
        <Message message="Nice work."/>
      </div>
    </div>
  )
}

export default Dialogs;