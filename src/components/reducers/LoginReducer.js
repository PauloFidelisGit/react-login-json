const initialState = {
    state: '',
};
const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_STATE':
            return { ...state, state: action.payload.state };
        default:
            return state
    }
}
export default LoginReducer;