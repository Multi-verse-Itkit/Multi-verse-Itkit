// import dialogsReducer from "./dialogs-reducer";
// import profileReducer from "./profile-reducer";



// let store = {
   
//     _state: {
//         profilePage: {
//             postData: [
//                 { id: 1, message: 'Hi, how are you', likescount: 5 },
//                 { id: 2, message: 'Its my first post', likescount: 10 },
//                 { id: 3, message: 'Its my 2 post', likescount: 11 }
//             ],
//             newPostText: ''
//         },
//         messagePage: {
//             dialogsData: [
//                 { id: 1, name: 'Kateryna' },
//                 { id: 2, name: 'Ludmyla' },
//                 { id: 3, name: 'Anton' },
//                 { id: 4, name: 'Evgeniy' },
//                 { id: 5, name: 'Yegor' },
//                 { id: 6, name: 'Oleg' }
//             ],
//             messageData: [
//                 { message: 'Hi', id: 1 },
//                 { message: 'How are you', id: 2 },
//                 { message: 'I`m ok, and you', id: 3 },
//                 { message: 'I am olso satisfied', id: 4 }
//             ],
//             newMessageBody: ''
//         },
//         sidebar: [
//             {
//                 id: 1,
//                 img: 'https://assets.vogue.com/photos/61852ecbf4b1074ed1a04c32/1:1/w_1865,h_1865,c_limit/GettyImages-1349812316.jpeg',
//                 name: 'Anjela'
//             },
//             {
//                 id: 2,
//                 img: 'data:image/jpeg;base64,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',
//                 name: 'Bread'
//             },
//             {
//                 id: 2,
//                 img: 'https://pyxis.nymag.com/v1/imgs/9f1/596/24c8ddfe02c284db1c9b3dc7d0def5eb85-10-jack-sparrow-pirates-of-the-carribean.rsquare.w330.jpg',
//                 name: 'Djek'
//             }
//         ]
//     },
//     _rerenderEntireTree() {
//     },


//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._rerenderEntireTree = observer;
//     },

//     dispatch(action) {

        // this._state.profilePage = profileReducer(this._state.profilePage, action);
        // this._state.messagePage = dialogsReducer(this._state.messagePage, action);
        // this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        
        // this._rerenderEntireTree(this._state)

//     }
// }



// export default store;
// window.state = store._state;


/*

let rerenderEntireTree = () => {
};
let state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi, how are you', likescount: 5},
            {id: 2, message: 'Its my first post', likescount: 10},
            {id: 3, message: 'Its my 2 post', likescount: 11}
        ],
        newPostText: 'New Post with DATA'
    },
    messagePage: {
        dialogsData: [
            {id: 1, name: 'Kateryna'},
            {id: 2, name: 'Ludmyla'},
            {id: 3, name: 'Anton'},
            {id: 4, name: 'Evgeniy'},
            {id: 5, name: 'Oleg'},
            {id: 6, name: 'Yegor'}
        ],
        messageData: [
            {message: 'Hi', id: 1},
            {message: 'How are you', id: 2},
            {message: 'I`m ok, and you', id: 3},
            {message: 'I am olso satisfied', id: 4}
        ],
        newDialogText: 'typping'
    },
    sidebar: [
        {
            id: 1,
            img: 'https://assets.vogue.com/photos/61852ecbf4b1074ed1a04c32/1:1/w_1865,h_1865,c_limit/GettyImages-1349812316.jpeg',
            name: 'Anjela'
        },
        {
            id: 2,
            img: 'data:image/jpeg;base64,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',
            name: 'Bread'
        },
        {
            id: 2,
            img: 'https://pyxis.nymag.com/v1/imgs/9f1/596/24c8ddfe02c284db1c9b3dc7d0def5eb85-10-jack-sparrow-pirates-of-the-carribean.rsquare.w330.jpg',
            name: 'Djek'
        }
    ]
}
export let addPost = () => {
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        likescount: 0
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export let addMessage = () => {

    let newMessage = {
        id: 5,
        message: state.messagePage.newDialogText
    }
    state.messagePage.messageData.push(newMessage)
    state.messagePage.newDialogText = '';
    rerenderEntireTree(state);
}
export let updateNewMessageText = (newText) => {
    state.messagePage.newDialogText = newText;
    rerenderEntireTree(state)
}
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}
*/

// addPost() {
//     let newPost = {
//         id: 4,
//         message: this._state.profilePage.newPostText,
//         likescount: 0
//     };
//     this._state.profilePage.postData.push(newPost);
//     this._state.profilePage.newPostText = '';
//     this._rerenderEntireTree(this._state);
// },
// updateNewPostText(newText) {
//     this._state.profilePage.newPostText = newText;
//     this._rerenderEntireTree(this._state);
// },
// addMessage() {

//     let newMessage = {
//         id: 5,
//         message: this._state.messagePage.newDialogText
//     }
//     this._state.messagePage.messageData.push(newMessage)
//     this._state.messagePage.newDialogText = '';
//     this._rerenderEntireTree(this._state);
// },
// updateNewMessageText(newText) {
//     this._state.messagePage.newDialogText = newText;
//     this._rerenderEntireTree(this._state)
// },
