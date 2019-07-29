import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
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

ReactDOM.render(<App
    dialogsData={dialogsData}
    messagesData={messagesData}
    postsData={postsData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
