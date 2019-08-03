
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Import secret credentials
import config from './fbConfig.js'

firebase.initializeApp(config);
firebase.firestore(); // timestampsInSnapshots: true already enabled by default

export default firebase;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
