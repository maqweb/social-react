import React from "react";
import style from "../Navbar.module.css";

const FriendsBlock = () => {
    return  (
        <div className={style.friendsBlock}>
            <div className={style.friendsTitle}>Friends</div>

            <div className={style.friendWrap}>
                <div className={style.friendItemWrap}>
                    <div className={style.friendPic}>
                        <img
                            src="https://avatars.mds.yandex.net/get-pdb/1025945/86f10e6d-eab5-4572-8c07-c672b854d2a5/s1200?webp=false"
                            alt=""/>
                    </div>
                    <div className={style.friendName}>
                        <div className={style.FirstName}>Empty</div>
                        <div className={style.SecondName}>Friend</div>
                    </div>
                </div>

                <div className={style.friendItemWrap}>
                    <div className={style.friendPic}>
                        <img
                            src="https://avatars.mds.yandex.net/get-pdb/1025945/86f10e6d-eab5-4572-8c07-c672b854d2a5/s1200?webp=false"
                            alt=""/>
                    </div>
                    <div className={style.friendName}>
                        <div className={style.FirstName}>Empty</div>
                        <div className={style.SecondName}>Friend</div>
                    </div>
                </div>

                <div className={style.friendItemWrap}>
                    <div className={style.friendPic}>
                        <img
                            src="https://avatars.mds.yandex.net/get-pdb/1025945/86f10e6d-eab5-4572-8c07-c672b854d2a5/s1200?webp=false"
                            alt=""/>
                    </div>
                    <div className={style.friendName}>
                        <div className={style.FirstName}>Empty</div>
                        <div className={style.SecondName}>Friend</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FriendsBlock;