import React from 'react';
import Myposts from './My posts/Myposts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";




const Profile = (props) => {
    
            return <div>
        <ProfileInfo/>
        <Myposts state={props.state.profilePage}
                 dispatch={props.dispatch} 
        />
    </div>

}

export default Profile