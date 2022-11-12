import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/Profile' className={navData => navData.isActive ? s.activeLink : s.item}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/Dialogs" className={navData => navData.isActive ? s.activeLink : s.item}>Dialogs</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/News" className={navData => navData.isActive ? s.activeLink : s.item}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/Music" className={navData => navData.isActive ? s.activeLink : s.item}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/Settings" className={navData => navData.isActive ? s.activeLink : s.item}>Settings</NavLink>
        </div>
        <div>
            <img src='https://st2.depositphotos.com/1002355/5268/v/450/depositphotos_52687257-stock-illustration-young-woman-face.jpg'></img>
        </div>
    </nav>

}

export default Navbar