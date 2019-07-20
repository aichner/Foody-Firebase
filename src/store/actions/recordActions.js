export const createRecord = (record) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // Make aync call to DB
        dispatch({ type: 'CREATE_RECORD', record });
    }
}
