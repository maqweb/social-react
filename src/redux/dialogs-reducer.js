const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Empty'},
        {id: 2, name: 'Asdf'},
        {id: 3, name: 'Qwer'},
        {id: 4, name: 'Qaz'}
    ],
    messagesData: [
        {id: 1, message: 'Hello React'},
        {id: 2, message: 'Nice work!'},
        {id: 3, message: 'Let\'s do it!'}
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE: {
            let text = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, {id: state.messagesData.length + 1, message: text }]
            };
        }

        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            };
        }

        default:
            return state;
    }
};

export const addMessageCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;