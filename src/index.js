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
                getFirebase, // Firebase
                getFirestore // Cloud Database
            })
        ),
        reduxFirestore(fbInit),
        reactReduxFirebase(fbInit, {
            useFirestoreForProfile: true, // Sync user data to user profile
            userProfile: 'users', // Tell Redux Firebase where our users are stored
            attachAuthIsReady: true // Enable firebase initializing before DOM rendering
        })
    )
);

// Wait until firebase is initialized, then render the DOM
store.firebaseAuthIsReady.then(() => {
    ReactDOM.render( <Provider store={store}><App /></Provider> , document.getElementById('root'));
    registerServiceWorker();
})

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
