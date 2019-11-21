let initialState = {
    friends: [
        {firstName: 'Empty', secondName: 'Jhon', userId:1},
        {firstName: 'Marry', secondName: 'Marry', userId:2},
        {firstName: 'Empty', secondName: 'Bill', userId:3},
        {firstName: 'Clint', secondName: 'Eastwood', userId:4}
    ]
};

const navbarReducer = (state = initialState, action) => {
    return state;
};

export default navbarReducer;