const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    usersId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };

        default:
            return state;
    }
};

export const setAuthUserData = (usersId, email, login) => ({type: SET_USER_DATA, data: { usersId, email, login }});

export default authReducer;