import React from "react";
import style from "./Paginator.module.css";

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(p => {
                return <button key={p} onClick={() => {
                    onPageChanged(p)
                }} className={currentPage === p ? style.selectedPage : null}>{p}</button>
            })}
        </div>
    )
};

export default Paginator;