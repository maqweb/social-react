import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    let messagesElements = state.messagesData.map(m => <Message message={m.message} id={m.id} key={m.id}/>);

    let newMessage = React.createRef();

    let onAddMessage = () => {
        props.addMessage();
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    };

    if (!props.isAuth) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>

                {messagesElements}

                <textarea ref={newMessage}
                          onChange={onMessageChange}
                          value={props.dialogsPage.newMessageText}
                          placeholder="Enter your message"/>

                <button onClick={onAddMessage}>Add message</button>
            </div>
        </div>
    )
};



export default Dialogs;