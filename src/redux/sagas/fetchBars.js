import Axios from 'axios';
import { put } from 'redux-saga/effects';

function* fetchBars(action) {
    try {
        const response = yield Axios.get('/bars');
        yield put({
            type: 'SET_BARS',
            payload: response.data
        });
    } catch (error) {
        console.log('Error getting bars', error);
        alert(`Couldn't get your movie data`);
    }
}

export default fetchBars;