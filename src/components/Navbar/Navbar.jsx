import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsNavbar from './FriendsNavbar/FriendsNavbar';
const Navbar = (props) => {
        
    let FriendsElement = props.sidebar.map ( f => <FriendsNavbar name={f.name} img={f.img} />);

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

        <div className={s.friends}>
            {FriendsElement}
        </div>
    </nav>
}

export default Navbar