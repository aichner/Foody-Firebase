import React from "react"
import ReactDOM from "react-dom"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"
import "./index.css"
import App from "./App"

// Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/rootReducer'

import registerServiceWorker from './registerServiceWorker';

// Create Redux store and store it in store
const store = createStore(rootReducer);

ReactDOM.render( <Provider store={store}><App /></Provider> , document.getElementById('root'));

registerServiceWorker();