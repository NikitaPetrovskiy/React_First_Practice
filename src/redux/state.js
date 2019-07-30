import {rerenderEntireThree} from "../render";

const state = {
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
            {id: 1, messages: "Hi!"},
            {id: 2, messages: "Hello my Maaan!"},
            {id: 3, messages: "Thank you!"},
            {id: 4, messages: "Yo!"},
            {id: 5, messages: "Good bye!"},
        ],
        dialogsData: [
            {id: 1, name: 'Sasha'},
            {id: 2, name: 'Dima'},
            {id: 3, name: 'Andrey'},
            {id: 4, name: 'Masha'},
            {id: 5, name: 'Jenia'},
        ],
    },
    sideBar: {
        friends: [
            {id: 1, name: 'Sasha', url: 'https://marathonandsprint.files.wordpress.com/2013/03/yoda3.jpg'},
            {id: 2, name: 'Dima', url: 'https://traditio.wiki/files/7/74/Anakin-Jedi.jpg'},
            {id: 3, name: 'Andrey', url: 'https://starwars.su/persons/luke-skywalker/6.jpg'},
        ]
    }
};
window.state = state;

export let addPost = () => {
    const newPosts = {
        id: 4,
        messages: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.postsData.push(newPosts);
    state.profilePage.newPostText = '';
    rerenderEntireThree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireThree(state);
}

export default state;