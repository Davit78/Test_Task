import axios from 'axios';

export const Search = (q) => {
    return dispatch => {
        dispatch({ type: "SEARCH_PENDING" });
        let url = `https://api-search.staging.win.gg/search?q=${q}&index=tournament`
        axios.get(url)
            .then(response=> dispatch({type: "SEARCH_RESLOVE", payload: response.data}))
            .catch((error) => dispatch({ type: "SEARCH_REJECT", err: error }))
    }
};

export const setSelectedItems=(items)=>{
    return {
        type: "SET_SELECTED_ITEMS",
        payload: items
    }
}
export const resetSearchReducer = () => {
    return { type: 'RESET_REDUCER'};
  }
  