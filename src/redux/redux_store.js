import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReduser from "./sideBarReducer";
import usersReducer from "./usersReducer";


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    // sidebar: sideBarReduser
})

let store = createStore(reducers);
window.store = store;

export default store;