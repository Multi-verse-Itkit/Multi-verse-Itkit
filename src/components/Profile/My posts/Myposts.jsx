import React from 'react';
import s from "./Myposts.module.css";
import Post from './Post/Post';



const Myposts = (props) => {
    console.log(props)
    let postElement = props.posts.map(p => <Post message={p.message} likescount={p.likescount} />)
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)

    }
    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
            </div>
            <div>
                <button onClick={onAddPost}> Add text</button>
            </div>

        </div>
        <div className={s.posts}>
            {postElement}
        </div>
    </div>

}

export default Myposts