const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
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
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, {id: 6, message: body}],
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: text});

export default dialogsReducer;