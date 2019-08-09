import Axios from 'axios';
import { put } from 'redux-saga/effects';


function* denyBar(action) {
    console.log('denyBar action is', action);
    yield Axios.delete(`/bars/${action.payload}`);
    // after the bar is deleted from the database, we need to call  
    // FETCH_UNAPPROVED_BARS. This saga gets all the unapproved bars
    // in our database. This is necessary for the Admin Page to reflect
    // accurate information.
    yield put({
        type: 'FETCH_UNAPPROVED_BARS'
    })
}

export default denyBar;