import React from "react"
import ReactDOM from "react-dom"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"
import "./index.css"
import App from "./App"
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './store/reducers/rootReducer'

// Redux Firebase / Firestore
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'

// Firebase config
import fbInit from './config/fbInit'

// Create Redux data-store and store it in store
// Apply thunk middle ware
const store = createStore(rootReducer,
    compose(
        applyMiddleware(
            thunk.withExtraArgument({
                getFirebase,
                getFirestore
            })
        ),
        reduxFirestore(fbInit),
        reactReduxFirebase(fbInit, {
            attachAuthIsReady: true
        })
    )
);

// Wait until firebase is initialized, then render the DOM
store.firebaseAuthIsReady.then(() => {
    ReactDOM.render( <Provider store={store}><App /></Provider> , document.getElementById('root'));
    registerServiceWorker();
})
