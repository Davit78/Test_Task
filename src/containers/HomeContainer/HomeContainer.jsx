import React from 'react';
import { connect } from 'react-redux';
import HomeComponent from '../../components/HomeComponent/HomeComponent';
import {Search,resetSearchReducer,setSelectedItems} from  '../../store/actions/SearchActions';
import {filter,findIndex} from 'lodash';

class HomeContainer extends React.Component {
    componentWillMount() {
        if (localStorage.selectedItems) {
            let items = JSON.parse(localStorage.selectedItems)
           this.props.setSelectedItems(items)
        }
    }
    onTournamentRemove=(item)=>{
        let selectedItems = this.props.selectedItems;
        selectedItems = filter(selectedItems,(o)=> o.id !== item.id)
        localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
        this.props.setSelectedItems(selectedItems)
    }
    onTournamentSelect = (item) => {
        let selectedItems = this.props.selectedItems;
        if (selectedItems.length > 0 && findIndex(selectedItems, (o) => o.id === item.id) === -1) {
            selectedItems.push(item)
            this.props.setSelectedItems(selectedItems)
        } else if (selectedItems.length === 0) {
            selectedItems.push(item)
            this.props.setSelectedItems(selectedItems)
        }
        localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
    }
    render() {
        return (
           <HomeComponent
                Search={this.props.Search}
                searchResults={this.props.searchResults}
                resetSearchReducer={this.props.resetSearchReducer}
                selectedItems={this.props.selectedItems}
                onTournamentRemove={this.onTournamentRemove}
                onTournamentSelect={this.onTournamentSelect}
           />
        );
    }
}
const mapStateFromProps = store => ({
    searchResults: store.SearchReducer.data,
    selectedItems: store.SearchReducer.selectedItems,
});

const mapDispatchFromProps = dispatch => ({
    Search: (q)=>(dispatch(Search(q))),
    resetSearchReducer: ()=>(dispatch(resetSearchReducer())),
    setSelectedItems: (items)=>(dispatch(setSelectedItems(items)))
});

export default connect(mapStateFromProps, mapDispatchFromProps)(HomeContainer)