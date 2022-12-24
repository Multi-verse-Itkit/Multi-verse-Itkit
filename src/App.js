import React from 'react';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header.jsx';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Profile from './components/Profile/Profile.jsx';
import Music from './components/Music/Music.jsx';
import News from './components/News/News.jsx';
import Settings from './components/Settings/Settings.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';



const App = (props) => {
        return (
            <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavbarContainer/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/Profile' element={<Profile/>}/>

                        <Route path='/Dialogs/*' element={<DialogsContainer/>}/>
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
