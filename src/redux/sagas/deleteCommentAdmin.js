import Axios from 'axios';
import { put } from 'redux-saga/effects';

// This function is for deleting a comment on the Specific Bar page view, if you're an admin.
// It then runs a GET request with payload2 to get the bar's specific messages
function* deleteCommentAdmin(action) {
    console.log('deleteCommentAdmin action is', action);
    yield Axios.delete(`/messages/admindelete/${action.payload1}`);
    const response = yield Axios.get(`/messages/${action.payload2}`);
    yield put({
        type: 'SET_BAR_MESSAGES',
        payload: response.data
    });
}

export default deleteCommentAdmin;