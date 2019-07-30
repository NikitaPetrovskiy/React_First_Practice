import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import { addPost } from "./redux/state";


export const rerenderEntireThree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>, document.getElementById('root'));
}

