import React from "react";
import style from "./FriendItem.module.css";

const FriendItem = (props) => {
    return  (
        <div className={style.friendItemWrap}>
            <div className={style.friendPic}>
                <img
                    src="https://avatars.mds.yandex.net/get-pdb/1025945/86f10e6d-eab5-4572-8c07-c672b854d2a5/s1200?webp=false"
                    alt=""/>
            </div>
            <div className={style.friendName}>
                <div className={style.FirstName}>{ props.firstName }</div>
                <div className={style.SecondName}>{ props.secondName }</div>
            </div>
        </div>
    )
};

export default FriendItem;