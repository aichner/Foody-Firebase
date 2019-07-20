// Reducers
import authReducer from './authReducer'
import recordReducer from './recordReducer'

// Redux
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    record: recordReducer
})

export default rootReducer;