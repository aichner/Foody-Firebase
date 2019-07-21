// Reducers
import authReducer from './authReducer'
import recordReducer from './recordReducer'

// Redux
import { combineReducers } from 'redux'

// Firestore reducer
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    record: recordReducer,
    firestore: firestoreReducer
})

export default rootReducer;
