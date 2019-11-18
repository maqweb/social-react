import React from "react";
import style from "./FriendsBlock.module.css";
import FriendItem from "./FriendItem/FriendItem";

const FriendsBlock = (props) => {

    let friendElement = props.friends.map(f => <FriendItem firstName={f.firstName} secondName={f.secondName}/>);

    return (
        <div className={style.friendsBlock}>
            <div className={style.friendsTitle}>Friends</div>

            <div className={style.friendWrap}>
                {friendElement}
            </div>

        </div>
    )
};

export default FriendsBlock;