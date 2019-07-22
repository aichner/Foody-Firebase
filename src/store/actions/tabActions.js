export const createTab = (tab) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // Make aync call to DB

        // Get userId (to know where to store the new tab)
        const userId = getState().firebase.auth.uid;
        // Get current tabs (to not overwrite)
        const currentTabs = getState().firebase.profile.tabs;

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
