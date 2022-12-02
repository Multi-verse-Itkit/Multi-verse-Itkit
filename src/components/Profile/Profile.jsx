import React from 'react';
import Myposts from './My posts/Myposts';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./My posts/Post/Post";



const Profile = (props) => {
            return <div>
        <ProfileInfo/>
        <Myposts state={props.state}
                 dispatch={props.dispatch} 
        />
    </div>

}

export default Profile