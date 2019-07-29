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

const dialogsData =[
    {id: 1, name: 'Sasha'},
    {id: 2, name: 'Dima'},
    {id: 3, name: 'Andrey'},
    {id: 4, name: 'Masha'},
    {id: 5, name: 'Jenia'},
];
const messagesData = [
    {id: 1, messages: "Hi!"},
    {id: 2, messages: "Hello my Maaan!"},
    {id: 3, messages: "Thank you!"},
    {id: 4, messages: "Yo!"},
    {id: 5, messages: "Good bye!"},
];
const postsData = [
    {id: 1, messages: 'Hi! I\'m First post!', likesCount: 10},
    {id: 2, messages: 'It\'s Me! Second post!', likesCount: 3},
    {id: 3, messages: 'It\'s new post made with using .map()! ', likesCount: 1000},
];

function App(props) {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
             <Header/>
             <Navbar/>
             <article className="app-wrapper-content">
                 <Route path='/profile' render={ () => <Profile postsData={props.postsData}/> }/>
                 <Route path='/dialogs'  render={ () => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/> }/>
                 <Route path='/news' render={ () => <News/> }/>
                 <Route path='/music' render={ () => <Music/> }/>
                 <Route path="/settings" re={ () => <Settings/> }/>
             </article>
          </div>
      </BrowserRouter>
  );
};

export default App;
