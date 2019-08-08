import Axios from 'axios';
import { put } from 'redux-saga/effects';


function* denyBar(action) {
    console.log('denyBar action is', action);
    yield Axios.delete(`/bars/${action.payload}`);
    yield put({
        type: 'FETCH_UNAPPROVED_BARS'
    })
}

export default denyBar;