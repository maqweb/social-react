import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello React!', likesCount: 23},
                {id: 1, message: 'It\'s nice work', likesCount: 11},
                {id: 1, message: 'Awesome!', likesCount: 7}
            ],
            newPostText: 'New Post'
        },

        dialogsPage: {
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navBar = navbarReducer(this._state.navBar, action);

        this._callSubscriber(this._state);

    }
};



export default store;
window.store = store;