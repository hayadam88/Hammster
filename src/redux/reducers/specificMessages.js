const specificMessages = (state = [], action) => {
    switch (action.type) {
        case 'SET_SPECIFIC_MESSAGES':
            return action.payload;
        default:
            return state;
    }
}

export default specificMessages;