// Reducers
import authReducer from './authReducer'
import recordReducer from './recordReducer'
import tabReducer from './tabReducer'

// Redux
import { combineReducers } from 'redux'

// Firestore reducer
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    record: recordReducer,
    tab: tabReducer,
    firestore: firestoreReducer
})

export default rootReducer;
