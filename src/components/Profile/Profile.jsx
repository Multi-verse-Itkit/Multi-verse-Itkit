import React from 'react';
import Myposts from './My posts/Myposts';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./My posts/Post/Post";



const Profile = (props) => {
    return <div>
        <ProfileInfo/>
        <Myposts postData={props.state.postData}
                 addPost={props.addPost}
                 newPostText={props.state.newPostText}
                 updateNewPostText={props.updateNewPostText}
        />
    </div>

}

export default Profile