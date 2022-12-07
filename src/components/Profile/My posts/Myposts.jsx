import React from 'react';
import s from "./Myposts.module.css";
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostElementActionCreator } from './../../../Redux/profile-reducer'



const Myposts = (props) => {
    
    let postElement = props.state.postData.map(p => <Post message={p.message} likescount={p.likescount} />)
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostElementActionCreator(text))

    }
    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.state.newPostText} />
            </div>
            <div>
                <button onClick={addPost}> Add text</button>
            </div>

        </div>
        <div className={s.posts}>
            {postElement}
        </div>
    </div>

}

export default Myposts