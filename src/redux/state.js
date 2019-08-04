const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, messages: 'Hi! I\'m First post!', likesCount: 10},
                {id: 2, messages: 'It\'s Me! Second post!', likesCount: 3},
                {id: 3, messages: 'It\'s new post made with using .map()! ', likesCount: 1000},
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
        if (action.type === ADD_POST) {
            const newPosts = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPosts);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messagesData.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }
    }

    // addPost() {
    //     const newPosts = {
    //         id: 4,
    //         messages: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.postsData.push(newPosts);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //    this._callSubscriber(this._state);
    // },
}
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST, newText: text});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: text});

window.store = store;
export default store;