'use strict'
/**
 * artist details view section
 */
import React, { PropTypes } from 'react'


const Details = ({ details, currentId, onBackToList }) => {
    return (  
        <div className='details'>
            Details is here <br/>
            { currentId }  <br/>
            
            <div onClick = {onBackToList}>
                 [ BACK TO LIST ]
            </div>               
        </div>
    )
}

export default Details
