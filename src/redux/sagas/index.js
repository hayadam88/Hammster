import { all, takeEvery } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import fetchBars from './fetchBars';
import fetchBarDetails from './fetchBarDetails';
import fetchBarMessages from './fetchBarMessages';
import addMessage from './addMessage';
import addBar from './addBar';
import fetchUnapprovedBars from './fetchUnapprovedBars';
import fetchAllMessages from './fetchAllMessages';
import denyBar from './denyBar';
import approveBar from './approveBar';
import deleteMessage from './deleteMessage';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield takeEvery('FETCH_BARS', fetchBars);
  yield takeEvery('FETCH_BAR_DETAILS', fetchBarDetails);
  yield takeEvery('FETCH_BAR_MESSAGES', fetchBarMessages);
  yield takeEvery('ADD_MESSAGE', addMessage);
  yield takeEvery('ADD_BAR', addBar);
  yield takeEvery('FETCH_UNAPPROVED_BARS', fetchUnapprovedBars);
  yield takeEvery('FETCH_ALL_MESSAGES', fetchAllMessages);
  yield takeEvery('DENY_BAR', denyBar);
  yield takeEvery('APPROVE_BAR', approveBar);
  yield takeEvery('DELETE_MESSAGE', deleteMessage);
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
  ]);
}
