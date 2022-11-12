import React from 'react';
import s from "./Post.module.css";
const Post = (props) => {

// console.log(props.message);
// debugger;

    return (
        <div className={s.item}>
            <img src='https://ic.pics.livejournal.com/malyaroff/70583048/57256/57256_900.jpg'></img>
            {props.message} 
        
            <div>
         <span>like </span> {props.likescount}
         </div>
         </div>


    )
}

export default Post