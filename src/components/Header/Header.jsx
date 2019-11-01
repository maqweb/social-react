import React from 'react';
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <img className={style.logo} src="https://www.clker.com/cliparts/N/0/4/q/4/R/react-redux.svg" alt="" />
    </header>
  )
}

export default Header;
