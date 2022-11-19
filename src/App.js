import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route, Routes} from 'react-router-dom';



const App = (props) => {
        return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.state.sidebar}/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/Profile' element={<Profile
                            state={props.state.profilePage}
                            addPost={props.addPost}
                            updateNewPostText={props.updateNewPostText}/>}/>

                        <Route path='/Dialogs/*' element={<Dialogs
                            state={props.state.messagePage}
                            addMessage={props.addMessage}
                            updateNewMessageText={props.updateNewMessageText}
                            newDialogText={props.state.messagePage.newDialogText}
                        />}/>
                        <Route path='/News' element={<News/>}/>
                        <Route path='/Music' element={<Music/>}/>
                        <Route path='/Settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
