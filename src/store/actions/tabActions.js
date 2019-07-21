export const createTab = (tab) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // Make aync call to DB
        const firestore = getFirestore();
        firestore.collection('tabs').add({
            ...tab,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_TAB', tab });
        }).catch((err) => {
            dispatch({ type: 'CREATE_TAB_ERROR', err });
        })
    }
}
