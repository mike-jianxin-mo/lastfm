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
        if(this.state && this.state.searchCountry)
            this.props.onSearchBtnClick(this.state.searchCountry);
        else 
            alert('Input a country name please.');
    },
    placeholder: 'please input country name ',
    render: function() {
        return (
            <div className='search'>
                <input onChange={this.onSearchCountryChange} className='country' placeholder={this.placeholder} />
                <input type="submit" value="Search" onClick={ this.onClick } className='button'/>
            </div>
        );
    }
});


export default Search
