import React, { Component } from 'react';
import Search from './Search/Search';
import SelectedItems from './SelectedItems/SelectedItems';
import "./HomeComponent.scss";
import {findIndex,filter} from 'lodash';

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            q: "",
            dropDown: true,
            selectedItems: []
        };
    }
    componentWillMount(){
        if(localStorage.selectedItems){
            let items = JSON.parse(localStorage.selectedItems)
            this.setState({
                selectedItems: items
            })
        }
    }
    componentWillUnmount() {
        document.removeEventListener("click", this.closeOnBlur)
    }

    onSearch=(value)=>{
        document.addEventListener("click", this.closeOnBlur);
        this.setState({q: value,dropDown: true},()=>{
            if(this.state.q.length>2){
                this.props.Search(this.state.q)
            }else{
                this.props.resetSearchReducer()
            }
        })
    }

    closeOnBlur = (e) => {
        this.setState({dropDown: false, q: ""})
        document.removeEventListener("click", this.closeOnBlur)
    };

    onTournamentSelect=(item)=>{
        let selectedItems = this.state.selectedItems;
        if(selectedItems.length>0 && findIndex(selectedItems,(o)=> o.id===item.id)===-1){
            selectedItems.push(item)
        }else if(selectedItems.length===0){
            selectedItems.push(item)
        }
        this.setState({selectedItems},()=>{
            localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
        })
    }

    onTournamentRemove=(item)=>{
        let selectedItems = this.state.selectedItems;
        selectedItems = filter(selectedItems,(o)=> o.id !== item.id)
        this.setState({selectedItems},()=>{
            localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-xl-6 col-lg-7 col-md-10">
                        <Search
                            q={this.state.q}
                            onSearch={this.onSearch}
                            searchResults={this.props.SearchReducer.data}
                            dropDown={this.state.dropDown}
                            onTournamentSelect={this.onTournamentSelect}
                        />
                    </div>
                    {this.state.selectedItems.length>0 && <div className="col-xl-8 col-lg-9 col-md-12">
                        <SelectedItems
                            items={this.state.selectedItems}
                            onTournamentRemove={this.onTournamentRemove}
                        />
                    </div>}
                </div>
            </div>
        );
    }
}

export default HomeComponent