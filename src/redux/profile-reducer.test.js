import profileReducer, {addPostCreator, deletePostAC} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hello React!', likesCount: 23},
        {id: 2, message: 'It\'s nice work', likesCount: 11},
        {id: 3, message: 'Awesome!', likesCount: 7}
    ]
};

it( 'length of posts should be incremented' , () => {
    // 1. test data
    let action = addPostCreator('test action');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4)
});

it( 'message of post should be correct' , () => {
    // 1. test data
    let action = addPostCreator('test action');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[3].message).toBe('test action')
});

it( 'after deleting length of messages should be decrement' , () => {
    // 1. test data
    let action = deletePostAC(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(2)
});

