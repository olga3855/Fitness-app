import {
    LOGIN_IN,
    LOGIN_OUT
} from '../../constants/actions';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_IN:
            return {
                loggedIn: true,
                user: action.user
            }
        case LOGIN_OUT:
            localStorage.removeItem('user')
            return {};
        default: return state;
    }
}

export default authReducer;