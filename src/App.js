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

function App(props) {
  return (
          <div className="app-wrapper">
             <Header/>
             <Navbar/>
             <article className="app-wrapper-content">
                 <Route path='/profile' render={ () => <Profile
                     state={props.state}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
                 /> }/>
                 <Route path='/dialogs'  render={ () => <Dialogs state={props.state}/> }/>
                 <Route path='/news' render={ () => <News/> }/>
                 <Route path='/music' render={ () => <Music/> }/>
                 <Route path="/settings" re={ () => <Settings/> }/>
             </article>
          </div>
  );
};

export default App;
