import React from 'react';
import style from './MainNav.module.css';
import {NavLink} from 'react-router-dom';

const MainNav = () => {
    return (
        <nav className = {style.nav}>
            <ul className = {style.list}>
                <li className = {style.item}>
                    <NavLink to='/profile' className={style.link} activeClassName={style.linkActive}>Profile</NavLink>
                </li>
                <li className = {style.item}>
                    <NavLink to='/dialogs' className={style.link} activeClassName={style.linkActive}>Messages</NavLink>
                </li>
                <li className = {style.item}>
                    <a className={style.link}>News</a>
                </li>
                <li className = {style.item}>
                    <a className={style.link}>Music</a>
                </li>
                <li className = {style.item}>
                    <a className={style.link}>Settings</a>
                </li>
            </ul>
        </nav>
    )
}

export default MainNav;