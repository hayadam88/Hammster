// This stores information about a specific bar in the reduxStore. This is used to 
// populate the specific bar pages
const barDetails = (state = {}, action) => {
    switch (action.type) {
        case 'SET_BAR_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

export default barDetails;