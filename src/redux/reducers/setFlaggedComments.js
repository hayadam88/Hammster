const setFlaggedComments = (state = [], action) => {
    switch (action.type) {
        case 'SET_FLAGGED_COMMENTS':
            return action.payload;
        default:
            return state;
    }
}

export default setFlaggedComments;