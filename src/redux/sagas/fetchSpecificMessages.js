import Axios from 'axios';
import { put } from 'redux-saga/effects';

function* fetchSpecificMessages(action) {
    console.log('fetchSpecficMessages action is', action);
    const specificResponse = yield Axios.get(`/messages/${action.payload}`);
    yield put({
        type: 'SET_SPECIFIC_MESSAGES',
        payload: specificResponse.data
    })
}

export default fetchSpecificMessages;