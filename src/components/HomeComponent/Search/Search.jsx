import React, {PureComponent} from 'react';
import './Search.scss'

class Search extends PureComponent  {
    renderResults = (data) => {
        let results = [];
        data.map((item, key) => {
            if (key < 10) {
                results.push(
                    <div className="items" key={key} id={item.id} onClick={() => this.props.onTournamentSelect(item)}>
                        <div className="itemsImage">
                            <img src={item.image} alt="image" />
                        </div>
                        <div className="itemsInfo">
                            <h6>{item.title}</h6>
                            <p>{item.description}</p>
                        </div>
                    </div>
                )
            }
        })
        return results
    }
    render() {
        return (
            <div className="searchContainer">
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        value={this.props.q}
                        onChange={(e) => this.props.onSearch(e.target.value)}
                    />
                    {this.props.searchResults.length > 0 && this.props.dropDown &&
                        <div className="results">
                            {this.renderResults(this.props.searchResults[0].documents)}
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Search