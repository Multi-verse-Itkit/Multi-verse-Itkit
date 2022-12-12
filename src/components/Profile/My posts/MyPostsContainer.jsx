import React from 'react';
import { addPostActionCreator, updateNewPostText } from './../../../Redux/profile-reducer'
import MyPosts from './Myposts'


const MyPostsContainer = (props) => {
    let state = props.store.getState()
    let store = props.store

    let addPost = () => {
        store.dispatch(addPostActionCreator());
    }
    let onPostChange = (text) => {
        store.dispatch(updateNewPostText(text))

    }
    return <MyPosts  updateNewPostText = {onPostChange} addPost={addPost} 
    posts={state.profilePage.posts}
    newPostText={state.profilePage.newPostText}

    
    />
  
}

export default MyPostsContainer