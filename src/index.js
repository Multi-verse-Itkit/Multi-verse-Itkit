import './index.css';
import reportWebVitals from './reportWebVitals.js';
import store from './Redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import {Provider} from 'react-redux';



const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {

    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>)
};
rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
});

/*
export let rerenderEntireTree = () => {
    const root = ReactDOM.createRoot
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>, document.getElementById('root'))
}*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
