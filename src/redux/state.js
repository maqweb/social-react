let store = {
    _state: {
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
    },
    _callSubscriber() {
        console.log(this._state);
        console.log("State changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: this._state.dialogPage.messagesData.length + 1,
                message: this._state.dialogPage.newMessageText
            };
            this._state.dialogPage.messagesData.push(newMessage);
            this._state.dialogPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};

export default store;
window.store = store;