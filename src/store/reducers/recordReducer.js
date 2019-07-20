// Have initial state for when state is not reay to be passed
const initState = {
    records: [
        {date: '2019-07-18', title: 'help', content: 'lorem ipsm'},
        {date: '2019-07-19', title: 'help1', content: 'lorem ipsm1'},
        {date: '2019-07-20', title: 'help2', content: 'lorem ipsm2'},
    ]
}

const recordReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_RECORD":
            console.log('created record', action.record);
            break;
        default:
            break;
    }
    return state;
}

export default recordReducer;