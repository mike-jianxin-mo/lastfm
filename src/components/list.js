'use strict'
/**
 * artist list view section
 */
import React, { PropTypes } from 'react'


const List = ({ artists, onItemSelected }) => {
    console.log('IN LISTS ', artists);

    if(artists){
        return (  
            <div className='list'>
                <ul>
                    List is here 
                    {
                            artists.map( item => {
                                return (
                                    <li value={item.mbid} key={item.mbid} onClick={() => onItemSelected(item.name)}>{item.name}</li>
                                )
                            })
                    }
                </ul>
            </div>
        )
    }else
        return (
              <div className='list'>
                    List is here 
            </div>
        )
}

export default List
