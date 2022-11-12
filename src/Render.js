import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./Redux/State";
import {addPost} from "./Redux/State";

/*addPost('Oleksandr programmer');*/

/*let postData =  [
    {id: 1, message: 'Hi, how are you', likescount: 5},
    {id: 2, message: 'Its my first post', likescount: 10},
    {id: 3, message: 'Its my 2 post', likescount: 11}
]
let dialogsData = [
    {id: 1, name: 'Kateryna'},
    {id: 2, name: 'Ludmyla'},
    {id: 2, name: 'Anton'},
    {id: 2, name: 'Evgeniy'},
    {id: 2, name: 'Oleg'},
    {id: 2, name: 'Yegor'}
]
let messageData = [
    {message: 'Hi', id: 1},
    {message: 'How are you', id: 2},
    {message: 'I`m ok, and you', id: 3},
    {message: 'I am olso satisfied', id: 4}
]*/
export let rerenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} />
        </React.StrictMode>);
};
rerenderEntireTree();

