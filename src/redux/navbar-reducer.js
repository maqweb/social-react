let initialState = {
    navBar: {
        friends: [
            {firstName: 'Empty', secondName: 'Jhon'},
            {firstName: 'Marry', secondName: 'Marry'},
            {firstName: 'Empty', secondName: 'Bill'},
            {firstName: 'Clint', secondName: 'Eastwood'}
        ]
    }
};

const navbarReducer = (state = initialState, action) => {
    return state;
};

export default navbarReducer;