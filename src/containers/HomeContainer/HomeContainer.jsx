import React from 'react';
import { connect } from 'react-redux';
import HomeComponent from '../../components/HomeComponent/HomeComponent';
import {Search,resetSearchReducer} from  '../../store/actions/SearchActions'

class HomeContainer extends React.Component {
    render() {
        return (
           <HomeComponent
                Search={this.props.Search}
                SearchReducer={this.props.SearchReducer}
                resetSearchReducer={this.props.resetSearchReducer}
           />
        );
    }
}
const mapStateFromProps = store => ({
    SearchReducer: store.SearchReducer
});

const mapDispatchFromProps = dispatch => ({
    Search: (q)=>(dispatch(Search(q))),
    resetSearchReducer: ()=>(dispatch(resetSearchReducer()))
});

export default connect(mapStateFromProps, mapDispatchFromProps)(HomeContainer)