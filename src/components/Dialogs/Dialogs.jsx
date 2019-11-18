import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messagesData.map(m => <Message message={m.message} id={m.id}/>);

    let newMessage = React.createRef();

    let onAddMessage = () => {
        props.addMessage();
    };

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.updateNewMessageText(text);
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
                          value={props.dialogsPage.newMessageText}
                          placeholder="Enter your message"/>

                <button onClick={onAddMessage}>Add message</button>
            </div>
        </div>
    )
};

export default Dialogs;