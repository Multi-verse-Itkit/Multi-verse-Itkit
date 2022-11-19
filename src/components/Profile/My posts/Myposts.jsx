import React from 'react';
import s from "./Myposts.module.css";
import Post from './Post/Post';


const Myposts = (props) => {

    let postElement = props.postData.map(p => <Post message={p.message} likescount={p.likescount}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }
    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
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