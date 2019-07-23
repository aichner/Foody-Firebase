export const createTab = (tab) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // Make aync call to DB

        // Get userId (to know where to store the new tab)
        const userId = getState().firebase.auth.uid;
        // Get user tier to decide how many tabs the user may have
        const userTier = getState().firebase.profile.tier;
        // Get current tabs (to not overwrite)
        const currentTabs = getState().firebase.profile.tabs;

        // Check if already exists
        let exists = currentTabs.map((ctab, i) => {
            if(ctab.title === tab.title){
                dispatch({ type: 'CREATE_TAB_ERROR_DUPLICATE', err: "Duplicate" });
                return true;
            }
        });

        // Check if the user can make new tabs dependent on the tier
        let canCreate = true;
        switch(userTier) {
            case 0:
                if(currentTabs.length === 3){ // Users of the tier 0 can create up to 3 tabs
                    dispatch({ type: 'CREATE_TAB_ERROR_LIMIT', err: "Tab limit reached" });
                    canCreate = false;
                }
                break;
            case 1:
                if(currentTabs.length === 10){ // Users of the tier 1 can create up to 10 tabs
                    dispatch({ type: 'CREATE_TAB_ERROR_LIMIT', err: "Tab limit reached" });
                    canCreate = false;
                }
                break;
            case 2:
                if(currentTabs.length === 15){ // Users of the tier 2 can create up to 15 tabs
                    dispatch({ type: 'CREATE_TAB_ERROR_LIMIT', err: "Tab limit reached" });
                    canCreate = false;
                }
                break;
            default:
                canCreate = true;
        }

        // If it does not already exists and user can create new tabs
        if(!exists.includes(true) && canCreate){
            const firestore = getFirestore();
            firestore.collection('users').doc(userId).update({
                tabs: [
                    ...currentTabs,
                    {...tab, createdAt: new Date()} 
                ]
            }).then(() => {
                dispatch({ type: 'CREATE_TAB', tab });
            }).catch((err) => {
                dispatch({ type: 'CREATE_TAB_ERROR', err });
            })
        }
    }
}
