'use strict'
/**
 * artist details view section
 */
import React, { PropTypes } from 'react'


const Details = ({ details, currentId, onBackToList }) => {
    let currentDetails = details[currentId]
    return (  
        <div className='details'>
            Details is here <br/>
            { currentId }  <br/>
            <ul>
                {
                    currentDetails.map( item => {
                        return (
                            <li value={item.mbid} key={item.mbid} onClick={() => onItemSelected(item.name, item.mbid)}>{item.name}</li>
                        )
                    })
                }
            </ul>
            
            <div onClick = {onBackToList}>
                 [ BACK TO LIST ]
            </div>               
        </div>
    )
}

export default Details
