import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersCotainer from "./components/Users/UsersContainer";

function App(props) {
  return (
          <div className="app-wrapper">
             <Header/>
             <Navbar/>
             <article className="app-wrapper-content">
                 <Route path='/profile' render={ () => <Profile /> }/>
                 <Route path='/dialogs'  render={ () => <DialogsContainer /> }/>
                 <Route path='/users'  render={ () => <UsersCotainer /> }/>
                 <Route path='/news' render={ () => <News/> }/>
                 <Route path='/music' render={ () => <Music/> }/>
                 <Route path="/settings" render={ () => <Settings/> }/>
             </article>
          </div>
  );
};

export default App;
