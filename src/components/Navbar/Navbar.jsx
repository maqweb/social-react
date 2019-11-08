import React from 'react';
import {NavLink} from "react-router-dom";
import style from './Navbar.module.css';
import FriendsBlock from "./FriendsBlock/FriendsBlock";

const Navbar = (props) => {
    return (
        <div className={style.navWrap}>
            <nav className={style.nav}>
                <div className={style.item}>
                    <NavLink className={style.itemLink} activeClassName={style.activeLink}
                             to="/profile">Profile</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink className={style.itemLink} activeClassName={style.activeLink}
                             to="/dialogs">Messages</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink className={style.itemLink} activeClassName={style.activeLink} to="/news">News</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink className={style.itemLink} activeClassName={style.activeLink} to="/music">Music</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink className={style.itemLink} activeClassName={style.activeLink}
                             to="/settings">Settings</NavLink>
                </div>
            </nav>

            <FriendsBlock state={props.state}/>
        </div>
    )
};

export default Navbar;
