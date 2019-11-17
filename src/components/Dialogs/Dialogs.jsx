import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messagesData.map(m => <Message message={m.message} id={m.id}/>);

    let newMessage = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageCreator());
    };

    let onMessageChange = () => {
        let text = newMessage.current.value;
        let action = updateNewMessageTextCreator(text);
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
                          value={props.dialogsPage.newMessageText}/>

                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
};

export default Dialogs;