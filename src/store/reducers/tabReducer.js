// Have initial state for when state is not reay to be passed
const initState = {
    tabs: [
        {date: '2019-07-18', title: 'help', content: 'lorem ipsm'},
        {date: '2019-07-19', title: 'help1', content: 'lorem ipsm1'},
        {date: '2019-07-20', title: 'help2', content: 'lorem ipsm2'},
    ]
}

const tabReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_TAB":
            console.log('created tab', action.tab);
            return state;
        case "CREATE_TAB_ERROR":
            console.log('create tab error', action.err);
            return state;
        default:
            return state;
    }
}

export default tabReducer;
