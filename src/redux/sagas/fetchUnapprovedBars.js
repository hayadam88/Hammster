import Axios from 'axios';
import { put } from 'redux-saga/effects';

function* fetchUnapprovedBars(action) {
    try {
        const response = yield Axios.get('/bars/unapproved');
        yield put({
            type: 'SET_UNAPPROVED_BARS',
            payload: response.data
        });
    } catch (error) {
        console.log('Error getting bars', error);
        alert(`Couldn't get your unapproved bars data`);
    }
}

export default fetchUnapprovedBars;