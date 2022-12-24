import React from 'react';
import StoreContext from '../../../StoreContext';
import { addPostActionCreator, updateNewPostText } from './../../../Redux/profile-reducer'
import MyPosts from './Myposts'


const MyPostsContainer = () => {
        return  <StoreContext.Consumer>
        {(store) => {
         
       let addPost = () => store.dispatch(addPostActionCreator());
       let onPostChange = (text) => store.dispatch(updateNewPostText(text))
       
        return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
            posts={store.getState().profilePage.posts}
            newPostText={store.getState().profilePage.newPostText} />}
        }
    </StoreContext.Consumer>

}

export default MyPostsContainer