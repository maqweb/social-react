import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.header}>
            <img className={style.logo} src="https://www.clker.com/cliparts/N/0/4/q/4/R/react-redux.svg" alt=""/>

            <div className={style.loginBlock}>
                {props.isAuth ? props.login : 
                <NavLink className={style.loginLink} to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
};

export default Header;
