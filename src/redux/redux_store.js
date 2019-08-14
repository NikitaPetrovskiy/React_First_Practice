import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReduser from "./sideBarReducer";


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    // sidebar: sideBarReduser
})

let store = createStore(reducers);
window.store = store;

export default store;