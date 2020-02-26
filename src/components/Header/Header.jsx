import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from './../../assets/images/logo.svg'
import logoRedux from './../../assets/images/Redux.svg'

const Header = (props) => {
    return (
        <header className={style.header}>

            <div className={style.logoBlock}>
                <img className={style.logo} src={logo} alt=""/>
                <img className={style.logoRedux} src={logoRedux} alt=""/>
            </div>

            <div className={style.loginBlock}>
                {
                    props.isAuth
                        ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                        : <NavLink className={style.loginLink} to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
};

export default Header;
