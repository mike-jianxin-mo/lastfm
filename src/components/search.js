'use strict'
/**
 * search button view section
 */
import React, { PropTypes } from 'react'


const Search = React.createClass({

    onSearchCountryChange: function(evt) {
        this.setState({
            searchCountry: evt.target.value
        });
    },
    onClick: function() {
        console.log(this.state.searchCountry);
        // this.setState({ showList: !this.state.showList, showDetails: !this.state.showDetails });
        this.props.onSearchBtnClick(this.state.searchCountry);
    },
    render: function() {
        return (
            <div className='search'>
                <input onChange={this.onSearchCountryChange} />
                <input type="submit" value="Search" onClick={ this.onClick }/>
            </div>
        );
    }
});


export default Search
