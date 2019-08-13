import Axios from 'axios';
import { put } from 'redux-saga/effects';

function* fetchFlaggedComments(action) {
    try {
        const response = yield Axios.get(`/messages`);
        yield put({
            type: 'SET_FLAGGED_COMMENTS',
            payload: response.data
        });
    } catch (error) {
        console.log('Error getting flagged comments', error);
    }
}

export default fetchFlaggedComments;