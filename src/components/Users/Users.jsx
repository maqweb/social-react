import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/images/user1.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
                        return <button onClick={() => {
                            props.onPageChanged(p)
                        }}
                                       className={props.currentPage === p && style.selectedPage}>{p}</button>
                    })}
                </div>
                {
                    props.users.map(u => (
                        <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={style.userPic}
                                     src={u.photos.small != null ? u.photos.small : userPhoto}
                                     alt=""/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {

                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'aca8e7e7-c4d4-416d-892f-b260a1550f34'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0){
                                                props.unfollow(u.id)
                                            }
                                        });

                                    // props.unfollow(u.id)


                                }}>Unfollow</button> :

                                <button onClick={() => {

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'aca8e7e7-c4d4-416d-892f-b260a1550f34'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0){
                                                props.follow(u.id)
                                            }
                                        });

                                    // props.follow(u.id)


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