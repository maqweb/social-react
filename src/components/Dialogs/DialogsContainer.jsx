import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {
            (store) => {

                let state = store.getState();
                let addMessage = () => {
                    store.dispatch(addMessageCreator());
                };
                let onMessageChange = (text) => {
                    let action = updateNewMessageTextCreator(text);
                    store.dispatch(action);
                };

                return <Dialogs updateNewMessageText={onMessageChange}
                                addMessage={addMessage}
                                dialogsPage={state.dialogsPage}/>
            }
        }
    </StoreContext.Consumer>

};

export default DialogsContainer;