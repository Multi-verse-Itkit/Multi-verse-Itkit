const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_ELEMENT = 'UPDATE-NEW-POST-ELEMENT'

let initialState = {
    postData: [
        { id: 1, message: 'Hi, how are you', likescount: 5 },
        { id: 2, message: 'Its my first post', likescount: 10 },
        { id: 3, message: 'Its my 2 post', likescount: 11 }
    ],
    newPostText: ''
};

const profileReducer = (state=initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_ELEMENT:
            state.newPostText = action.newText;
            return state;
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likescount: 0
            };
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        default:
            return state;
    }

}
// with MyPost.jsx
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostElementActionCreator = (text) => ({ type: UPDATE_NEW_POST_ELEMENT, newText: text });

export default profileReducer;