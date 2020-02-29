const ADD_MESSAGE = 'dialogsReducer/ADD_MESSAGE';

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
    value: '123'
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE: {
            let text = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: state.messagesData.length + 1, message: text }],
            };
        }

        default:
            return state;
    }
};

export const addMessageCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody});

export default dialogsReducer;