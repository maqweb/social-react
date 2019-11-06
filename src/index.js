import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = [
    { id: 1, name: 'Empty'},
    { id: 2, name: 'Asdf'},
    { id: 3, name: 'Qwer'},
    { id: 4, name: 'Qaz'}
];

let messagesData = [
    { id: 1, message: 'Hello React' },
    { id: 2, message: 'Nice work!' },
    { id: 3, message: 'Let\'s do it!' }
];

let posts = [
    { id: 1, message: 'Hello React!', likesCount: 23 },
    { id: 1, message: 'It\'s nice work', likesCount: 11 },
    { id: 1, message: 'Awesome!', likesCount: 7 },
];


ReactDOM.render(<App dialogs={dialogsData} messages={messagesData} posts={posts}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
