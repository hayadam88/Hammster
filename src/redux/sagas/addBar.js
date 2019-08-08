import Axios from 'axios';
import {
    put
} from 'redux-saga/effects';


function* addBar(action) {
    try {
        yield Axios.post('/bars', action.payload);
        yield put({
            type: 'FETCH_BARS',
        });
    } catch (error) {
        console.log('Error with addBar SAGA', error);
    }
}

export default addBar;