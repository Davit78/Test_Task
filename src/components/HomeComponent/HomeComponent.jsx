import React, { Component } from 'react';
import Search from './Search/Search';
import SelectedItems from './SelectedItems/SelectedItems';
import "./HomeComponent.scss";

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            q: "",
            dropDown: true,
        };
        this.timeOut = 0
    }
    componentWillUnmount() {
        document.removeEventListener("click", this.closeOnBlur)
    }

    onSearch = (value) => {
        document.addEventListener("click", this.closeOnBlur);
        this.setState({ q: value, dropDown: true })
        clearTimeout(this.timeout);
        if(value.length>2){
            this.timeout = setTimeout(() => {
                this.props.Search(this.state.q)
            }, 500);
        }else{
            this.props.resetSearchReducer()
        }
    }

    closeOnBlur = (e) => {
        this.setState({ dropDown: false, q: "" })
        document.removeEventListener("click", this.closeOnBlur)
    };

    render() {
        return (
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-xl-6 col-lg-7 col-md-10">
                        <Search
                            q={this.state.q}
                            onSearch={this.onSearch}
                            searchResults={this.props.searchResults}
                            dropDown={this.state.dropDown}
                            selectedItems={this.props.selectedItems}
                            onTournamentSelect={this.props.onTournamentSelect}
                        />
                    </div>
                    {this.props.selectedItems.length>0 && <div className="col-xl-8 col-lg-9 col-md-12">
                        <SelectedItems
                            selectedItems={this.props.selectedItems}
                            onTournamentRemove={this.props.onTournamentRemove}
                        />
                    </div>}
                </div>
            </div>
        );
    }
}

export default HomeComponent