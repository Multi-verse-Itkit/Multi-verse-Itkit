import React from 'react';
import StoreContext from '../../../StoreContext';
import { addPostActionCreator, updateNewPostText } from './../../../Redux/profile-reducer'
import MyPosts from './Myposts'
import {connect} from 'react-redux'


// const MyPostsContainer = () => {
//         return  <StoreContext.Consumer>
//         {(store) => {
         
//        let addPost = () => store.dispatch(addPostActionCreator());
//        let onPostChange = (text) => store.dispatch(updateNewPostText(text))
       
//         return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
//             posts={store.getState().profilePage.posts}
//             newPostText={store.getState().profilePage.newPostText} />}
//         }
//     </StoreContext.Consumer>


let mapStateToProps = (state) => {
    return(
        {
            posts: state.profilePage.posts,
            newPostText: state.profilePage.newPostText
        }
    )
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {dispatch(updateNewPostText(text))},
        addPost: () => {dispatch(addPostActionCreator())}
    } }
const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer