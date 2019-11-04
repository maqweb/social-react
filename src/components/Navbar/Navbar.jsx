import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink className={style.itemLink} activeClassName={style.activeLink} to="/profile">Profile</NavLink>
      </div>
      <div className={style.item}>
        <NavLink className={style.itemLink} activeClassName={style.activeLink} to="/dialogs">Messages</NavLink>
      </div>
      <div className={style.item}>
        <NavLink className={style.itemLink} activeClassName={style.activeLink} to="/news">News</NavLink>
      </div>
      <div className={style.item}>
        <NavLink className={style.itemLink} activeClassName={style.activeLink} to="/music">Music</NavLink>
      </div>
      <div className={style.item}>
        <NavLink className={style.itemLink} activeClassName={style.activeLink} to="/settings">Settings</NavLink>
      </div>
    </nav>
  )
};

export default Navbar;
