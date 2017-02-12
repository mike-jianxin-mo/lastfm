'use strict'
/**
 * main content section
 */
import React from 'react'

import List from '../components/list'
import Details from '../components/details'

const MainContent = React.createClass({
    handleClick(name, mbid) {
        if(this.props.details[mbid])
            this.props.onSelectLoadedItem(name, mbid);
        else
            this.props.onItemSelected(name, mbid); 
    },
        
    render() {
        return (
            <div>
                { this.props.showList ?  <List  artists = {this.props.artists}
                                                currentPage = {this.props.currentPage} 
                                                onItemSelected = {this.handleClick} 
                                                onOutOfPageRange = {this.props.onOutOfPageRange} 
                                                onSwitchPage = {this.props.onSwitchPage} />: null }
                { this.props.showDetails ?  <Details    details = { this.props.details }  
                                                        currentId = { this.props.currentId } 
                                                        onBackToList = {this.props.onBackToList} />: null }
            </div>
        )
    }
});

export default MainContent

