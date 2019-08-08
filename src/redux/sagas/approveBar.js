import Axios from 'axios';
import { put } from 'redux-saga/effects';


function* approveBar(action) {
    console.log('denyBar action is', action);
    yield Axios.put(`/bars/${action.payload}`);
    yield put({
        type: 'FETCH_UNAPPROVED_BARS'
    })
}

export default approveBar;