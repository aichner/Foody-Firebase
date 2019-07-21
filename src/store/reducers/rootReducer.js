// Reducers
import authReducer from './authReducer'
import recordReducer from './recordReducer'
import tabReducer from './tabReducer'

// Redux
import { combineReducers } from 'redux'

// Firestore reducer
import { firestoreReducer } from 'redux-firestore'

// Firebase reducer
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    record: recordReducer,
    tab: tabReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer // Authentication
})

export default rootReducer;
