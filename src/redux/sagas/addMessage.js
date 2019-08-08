import Axios from 'axios';
import { put } from 'redux-saga/effects';


function* addMessage(action) {
    try {
        yield Axios.post('/messages', action.payload);
        yield put({
            type: 'FETCH_BAR_MESSAGES',
            payload: action.payload.bar_id
        });
    } catch (error) {
        console.log('Error getting bar messages', error);
    }
}

export default addMessage;