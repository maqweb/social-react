let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hello React!', likesCount: 23 },
            { id: 1, message: 'It\'s nice work', likesCount: 11 },
            { id: 1, message: 'Awesome!', likesCount: 7 }
        ]
    },

    dialogPage: {
        dialogsData: [
            { id: 1, name: 'Empty'},
            { id: 2, name: 'Asdf'},
            { id: 3, name: 'Qwer'},
            { id: 4, name: 'Qaz'}
        ],
        messagesData: [
            { id: 1, message: 'Hello React' },
            { id: 2, message: 'Nice work!' },
            { id: 3, message: 'Let\'s do it!' }
        ]
    },

    navBar: {
        friends: [
            { firstName: 'Empty', secondName: 'Qaz' },
            { firstName: 'Asdf', secondName: 'Qwer' },
            { firstName: 'Mdn', secondName: 'Zxc' },
            { firstName: 'Vbn', secondName: 'Rty' }
        ]
    }

};

export default  state;