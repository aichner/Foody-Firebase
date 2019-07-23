// Have initial state for when state is not ready to be passed
const initState = {}

const tabReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_TAB":
            console.log('created tab', action.tab);
            return state;
        case "CREATE_TAB_ERROR":
            console.log('create tab error', action.err);
            return state;
        case "CREATE_TAB_ERROR_DUPLICATE":
            console.log('create tab error', action.err);
            return state;
        case "CREATE_TAB_ERROR_LIMIT":
            console.log('create tab error', action.err);
            return state;
        default:
            return state;
    }
}

export default tabReducer;
