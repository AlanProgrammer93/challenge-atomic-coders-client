
let userState;

if (localStorage.getItem('user')) {
    userState = JSON.parse(window.localStorage.getItem('user'));
} else {
    userState = null;
}

export const userReducer = (state = userState, action) => {
    switch (action.type) {
        case "LOGGED_IN_USER":
            return action.payload;
        case "LOGOUT":
            return action.payload;
        default:
            return state;
    }
}
