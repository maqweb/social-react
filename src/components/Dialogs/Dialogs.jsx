import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map( d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messagesData.map( m => <Message message={m.message} id={m.id}/>);

    let newMessage = React.createRef();

    let addMessage = () => {
        let newMessageText = newMessage.current.value;
        alert(newMessageText);
    };

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={style.messages}>
                { messagesElements }
                <textarea ref={newMessage}/>
                <button onClick={ addMessage }>Add message</button>
            </div>
        </div>
    )
};

export default Dialogs;