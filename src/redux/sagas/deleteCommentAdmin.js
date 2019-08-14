import Axios from 'axios';
import { put } from 'redux-saga/effects';


function* deleteCommentAdmin(action) {
    console.log('unflagComment action is', action);
    yield Axios.delete(`/messages/admindelete/${action.payload.message_id}`);
}

export default deleteCommentAdmin;