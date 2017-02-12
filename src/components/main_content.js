'use strict'
/**
 * main content section
 */
import React from 'react'

import List from '../components/list'
import Details from '../components/details'


const MainContent = ({ artists, details, currentId, onItemSelected, showList, showDetails }) => {
    return (
        <div>
            { showList ?  <List artists = {artists} onItemSelected = {onItemSelected} />: null }
            { showDetails ?  <Details details = { details } currentId = { currentId } />: null }
        </div>
    )

}



export default MainContent

