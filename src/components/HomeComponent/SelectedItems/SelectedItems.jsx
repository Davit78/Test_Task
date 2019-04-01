import React, {Component} from 'react';
import close from '../../../assets/images/close.png'
import './SelectedItems.scss';

class SelectedItems extends Component {
    renderItems=(items)=>{
        let selectedItems=[]
        items.map((item,key)=>{
            selectedItems.push(
                <div className="col-md-6" key={key}>
                    <div className="items">
                        <img src={close} className="closeIcon" onClick={()=>this.props.onTournamentRemove(item)} alt=""/>
                        <div className="itemsImage">
                            <img src={item.image} alt={item.title}/>
                        </div>
                        <div className="itemsInfo">
                            <h6>{item.title}</h6>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            )
        })
        return selectedItems;
    }
    render() {
        return (
            <div className="selectedContainer">
                <div className="row">
                    {this.renderItems(this.props.selectedItems)}
                </div>
            </div>
        );
    }
}

export default SelectedItems