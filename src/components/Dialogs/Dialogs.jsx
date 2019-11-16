import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

const Dialogs = (props) => {

    let dialogsElements = props.dialogPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogPage.messagesData.map(m => <Message message={m.message} id={m.id}/>);

    let newMessage = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let onMessageChange = () => {
        let text = newMessage.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    };

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>

                {messagesElements}

                <textarea ref={newMessage}
                          onChange={onMessageChange}
                          value={props.dialogPage.newMessageText}/>

                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
};

export default Dialogs;