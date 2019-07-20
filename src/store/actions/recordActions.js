export const createRecord = (record) => {
    return (dispatch, getState) => {
        // Make aync call to DB
        dispatch({ type: 'CREATE_RECORD', record });
    }
}