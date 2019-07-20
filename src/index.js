import React from "react"
import ReactDOM from "react-dom"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"
import "./index.css"
import App from "./App"

// Redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './store/reducers/rootReducer'

import registerServiceWorker from './registerServiceWorker';

// Create Redux data-store and store it in store
// Apply thunk middle ware
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render( <Provider store={store}><App /></Provider> , document.getElementById('root'));

registerServiceWorker();
