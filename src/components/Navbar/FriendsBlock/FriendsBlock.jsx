import React from "react";
import style from "./FriendsBlock.module.css";
import FriendItem from "./FriendItem/FriendItem";

const FriendsBlock = (props) => {

    let friendElement = props.navBar.friends.map(f => <FriendItem firstName={f.firstName}
                                                                  secondName={f.secondName}
                                                                  key={f.userId}/>);

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