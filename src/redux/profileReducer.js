const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

const profileReducer = (state, action) => {
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