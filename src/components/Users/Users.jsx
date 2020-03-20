import React from "react";
import style from './Users.module.css'
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, totalItemsCount, pageSize, onPageChanged, users, ...props}) => {

    return (
        <div className={style.users}>

            <Paginator totalItemsCount={totalItemsCount}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       pageSize={pageSize}/>
            <div>
                {users.map(u => <User user={u} key={u.id}
                                      follow={props.follow}
                                      unfollow={props.unfollow}
                                      followingInProgress={props.followingInProgress}/>)}
            </div>
        </div>
    )
};

export default Users;