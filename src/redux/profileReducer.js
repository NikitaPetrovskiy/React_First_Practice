const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

const initialState = {
    postsData: [
        {id: 1, message: 'Hi! I\'m First post!', likesCount: 10},
        {id: 2, message: 'It\'s Me! Second post!', likesCount: 3},
        {id: 3, message: 'It\'s new post made with using .map()! ', likesCount: 1000},
    ],
    newPostText: 'new post text'
}

const profileReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case ADD_POST:
            const newPosts = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            };
            state.postsData.push(newPosts);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST, newText: text});

export default profileReducer;