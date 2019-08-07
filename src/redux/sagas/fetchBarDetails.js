import Axios from 'axios';
import { put } from 'redux-saga/effects';


function* fetchBarDetails(action) {
    console.log('fetchBarDetails action is', action);
    const detailsResponse = yield Axios.get(`/bars/details?id=${action.payload}`);
    yield put({
        type: 'SET_BAR_DETAILS',
        payload: detailsResponse.data
    })
}

export default fetchBarDetails;