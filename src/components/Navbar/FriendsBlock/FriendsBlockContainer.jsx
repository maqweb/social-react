import React from "react";
import style from "./FriendsBlock.module.css";
import FriendItem from "./FriendItem/FriendItem";
import StoreContext from "../../../StoreContext";
import FriendsBlock from "./FriendsBlock";

const FriendsBlockContainer = () => {

    return <StoreContext.Consumer>
        {
            (store) => {

                let state = store.getState();

                return <FriendsBlock state={state.navBar}/>
            }
        }
    </StoreContext.Consumer>
};

export default FriendsBlockContainer;