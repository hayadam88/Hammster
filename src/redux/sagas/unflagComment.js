import Axios from 'axios';
import { put } from 'redux-saga/effects';


function* unflagComment(action) {
    console.log('unflagComment action is', action);
    yield Axios.put(`/messages/flagged/${action.payload}`);
    yield put({
        type: 'FETCH_FLAGGED_COMMENTS'
    })
}

export default unflagComment;