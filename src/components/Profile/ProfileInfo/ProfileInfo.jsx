import React from 'react';
import s from "./ProfileInfo.module.css";
const ProfileInfo = () => {
    return ( <div>
        <div className={s.contentimg}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDShA-7IDcK4HSizjWGihMPi6H2cvspmS87Q&usqp=CAU"></img>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
	</div >
    )
}

export default ProfileInfo