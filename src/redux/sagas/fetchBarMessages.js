import Axios from 'axios';
import { put } from 'redux-saga/effects';

function* fetchBarMessages(action) {
    try {
        const response = yield Axios.get(`/messages/${action.payload}`);
        yield put({
            type: 'SET_BAR_MESSAGES',
            payload: response.data
        });
    } catch (error) {
        console.log('Error getting bar messages', error);
    }
}

export default fetchBarMessages;