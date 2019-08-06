// This reducer will store our list of bars in the reduxStore
const barListReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_BARS':
            return action.payload;
        default:
            return state;
    }
}

export default barListReducer;


