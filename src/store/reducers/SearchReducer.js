const defaultState = {
    fetching: false,
    fetched: false,
    data: [],
    error: false,
    selectedItems: []
}

const searchReducer = (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "SEARCH_PENDING":
            return {
                ...state,
                fetching: true,
                fetched: false,
                error: false
            }
        case "SEARCH_RESLOVE":
            return {
                ...state,
                fetching: false,
                fetched: true,
                data: payload,
                error: false
            }
        case "SEARCH_REJECT":
            return {
                ...state,
                fetching: false,
                fetched: false,
                data: [],
                error: action.err
            }
        case "SET_SELECTED_ITEMS": 
            return {
                ...state,
                selectedItems: payload
            }
        case "RESET_REDUCER":
            return {
                ...state,
                fetching: false,
                fetched: false,
                data: [],
                error: false,
            }
        default: return state;
    }
}

export default searchReducer;