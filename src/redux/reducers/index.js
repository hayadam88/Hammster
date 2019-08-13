import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import barListReducer from './barListReducer';
import barDetails from './barDetails';
import setBarMessages from './setBarMessages';
import unapprovedBars from './unapprovedBars';
import setFlaggedComments from './setFlaggedComments';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  barListReducer, // List of approved bars and their information from database
  barDetails, // Stores a specific bar's details
  setBarMessages, //
  unapprovedBars,
  setFlaggedComments,
});

export default rootReducer;
