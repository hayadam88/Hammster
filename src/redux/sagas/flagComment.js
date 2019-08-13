import Axios from 'axios';
import { put } from 'redux-saga/effects';


function* flagComment(action) {
    console.log('flagComment action is', action);
    yield Axios.put(`/messages/${action.payload}`);
    yield put({
        type: 'FETCH_FLAGGED_COMMENTS'
    })
}

export default flagComment;