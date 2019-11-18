import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageCreator());
    };
    let onMessageChange = (text) => {
        let action = updateNewMessageTextCreator(text);
        props.store.dispatch(action);
    };

    return (
        <Dialogs updateNewMessageText={onMessageChange}
                 addMessage={addMessage}
                 dialogsPage={state.dialogsPage}/>
    )
};

export default DialogsContainer;