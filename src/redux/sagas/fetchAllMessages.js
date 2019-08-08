import Axios from 'axios';
import { put } from 'redux-saga/effects';

function* fetchAllMessages(action) {
    try {
        const response = yield Axios.get(`/messages`);
        yield put({
            type: 'SET_ALL_MESSAGES',
            payload: response.data
        });
    } catch (error) {
        console.log('Error getting bar messages', error);
    }
}

export default fetchAllMessages;