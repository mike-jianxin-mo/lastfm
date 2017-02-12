'use strict'
/**
 * artist details view section
 */
import React, { PropTypes } from 'react'

const Details = ({ details, currentId, onBackToList, currentName }) => {
    let currentDetails = details[currentId]
    return (  
        <div className='details'>
            <div>Top traks of { currentName }<br/></div>
            <div className='back2list' onClick = {onBackToList}>
                 [ BACK TO LIST ]
            </div> 
            <ul>
                {
                    currentDetails.map( (item, index) => {
                        return (
                            <li value={item.mbid} key={index} >{item.name}</li>
                        )
                    })
                }
            </ul>
            
             
        </div>
    )
}

export default Details
