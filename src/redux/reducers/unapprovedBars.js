const unapprovedBars = (state = [], action) => {
    switch (action.type) {
        case 'SET_UNAPPROVED_BARS':
            return action.payload;
        default:
            return state;
    }
}

export default unapprovedBars;