// import {rerenderEntireTree} from "../render";
let rerenderEntireTree = () => {
    console.log(state);
    console.log(state.profilePage.newPostText);
};

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello React!', likesCount: 23},
            {id: 1, message: 'It\'s nice work', likesCount: 11},
            {id: 1, message: 'Awesome!', likesCount: 7}
        ],
        newPostText: 'Nice React'
    },

    dialogPage: {
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
        newMessageText: 'New Message'
    },

    navBar: {
        friends: [
            {firstName: 'Empty', secondName: 'Jhon'},
            {firstName: 'Marry', secondName: 'Marry'},
            {firstName: 'Empty', secondName: 'Bill'},
            {firstName: 'Clint', secondName: 'Eastwood'}
        ]
    }
};

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const addMessage = () => {
    let newMessage = {
        id: state.dialogPage.messagesData.length + 1,
        message: state.dialogPage.newMessageText
    };
    state.dialogPage.messagesData.push(newMessage);
    state.dialogPage.newMessageText = '';
    rerenderEntireTree(state);
};

export const updateNewMessageText = (newText) => {
    state.dialogPage.newMessageText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};

export default state;