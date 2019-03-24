const defaultState = {
    fetching: false,
    fetched: false,
    data: [],
    error: false,
}

const searchReducer = (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "SEARCH_PENDING":
            state = Object.assign({}, state, {
                fetching: true,
                fetched: false,
                error: false
            })
            break;
        case "SEARCH_RESLOVE":
            state = Object.assign({}, state, {
                fetching: false,
                fetched: true,
                data: payload,
                error: false
            })
            break;
        case "SEARCH_REJECT":
            state = Object.assign({}, state, {
                fetching: false,
                fetched: false,
                data: [],
                error: action.err
            })
            break;
        case "RESET_REDUCER":
            state = Object.assign({}, state, {
                fetching: false,
                fetched: false,
                data: [],
                error: false,
            })
            break;
        default: state = defaultState;
    }
    return state;
}

export default searchReducer;