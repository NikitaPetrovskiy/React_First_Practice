import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReduser from "./sideBarReducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi! I\'m First post!', likesCount: 10},
                {id: 2, message: 'It\'s Me! Second post!', likesCount: 3},
                {id: 3, message: 'It\'s new post made with using .map()! ', likesCount: 1000},
            ],
            newPostText: 'new post text',
        },
        dialogsPage: {
            messagesData: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "Hello my Maaan!"},
                {id: 3, message: "Thank you!"},
                {id: 4, message: "Yo!"},
                {id: 5, message: "Good bye!"},
            ],
            dialogsData: [
                {id: 1, name: 'Sasha'},
                {id: 2, name: 'Dima'},
                {id: 3, name: 'Andrey'},
                {id: 4, name: 'Masha'},
                {id: 5, name: 'Jenia'},
            ],
            newMessageBody: '',
        },
        sideBar: {
            friends: [
                {id: 1, name: 'Sasha', url: 'https://marathonandsprint.files.wordpress.com/2013/03/yoda3.jpg'},
                {id: 2, name: 'Dima', url: 'https://traditio.wiki/files/7/74/Anakin-Jedi.jpg'},
                {id: 3, name: 'Andrey', url: 'https://starwars.su/persons/luke-skywalker/6.jpg'},
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sideBarReduser(this._state.sideBar, action);

        this._callSubscriber(this._state);
    }
}

window.store = store;
export default store;