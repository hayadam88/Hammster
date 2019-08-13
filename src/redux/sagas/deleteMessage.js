import Axios from 'axios';
import { put } from 'redux-saga/effects';


function* deleteMessage(action) {
    console.log('deleteMessage action is', action);
    yield Axios.delete(`/messages/${action.payload}`);
    yield put({
        type: 'FETCH_FLAGGED_COMMENTS',
    })
}

export default deleteMessage;