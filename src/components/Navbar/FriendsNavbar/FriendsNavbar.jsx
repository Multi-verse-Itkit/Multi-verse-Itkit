import React from 'react';
import s from '../../Navbar/Navbar.module.css'

const FriendsNavbar = (props) => {
    return (
        <div >
            <img src={props.img}></img>
            <figcaption>{props.name}</figcaption>
        </div>
    )


}

export default FriendsNavbar