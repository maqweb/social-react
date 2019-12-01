import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/images/user1.png";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        (
            <div>
                <div>
                    {pages.map(p => {
                        return <button onClick={() => {props.onPageChanged(p)}}
                                       className={props.currentPage === p && style.selectedPage}>{p}</button>
                    })}
                </div>
                {
                    props.users.map(u => (
                        <div key={u.id}>
                    <span>
                        <div>
                            <img className={style.userPic}
                                 src={u.photos.small != null ? u.photos.small : userPhoto}
                                 alt=""/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    props.unFollow(u.id)
                                }}>Unfollow</button> :
                                <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                            <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </span>
                    </span>
                        </div>
                    ))}
            </div>
        )
    )
};

export default Users;