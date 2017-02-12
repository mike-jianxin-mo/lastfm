'use strict'
/**
 * artist list view section
 */
import React, { PropTypes } from 'react'

let style = {
  backgroundColor: '#CCC',
  width: '20%',
  height: '500px',
  float: 'left'
};

const List = ({ artists, onItemSelected, currentPage, onOutOfPageRange, onSwitchPage, onGetMoreArtits }) => {
   
    if(artists){
    
        let starPointer = 5 * (currentPage - 1)
        let endPointer  = starPointer + 5
        let showArtists = null
        if(artists.length <= endPointer && artists.length >= starPointer ){
            showArtists = artists.slice(starPointer)
        }else
            if(artists.length > endPointer){
                showArtists = artists.slice(starPointer, endPointer)
            }
            
        let pageLength = Math.ceil(artists.length / 5 )
        let pageNumbers = [];
        for(var i = 1; i <= pageLength; i++)
            pageNumbers.push(i); 
        
        if(showArtists){   
            return (
                <div>  
                    <div className='list'>
                        <ul>
                            List is here 
                            {
                                    showArtists.map( item => {
                                        return (
                                            <li value={item.mbid} key={item.mbid} onClick={() => onItemSelected(item.name, item.mbid)}>{item.name}</li>
                                        )
                                    })
                            }
                        </ul>   
                    </div>
                    <div className='pagination' style={style}>
                        <ul>
                            {
                                pageNumbers.map( pNumber =>{
                                    return (
                                        <li value={pNumber} key={pNumber} onClick = {() => onSwitchPage(pNumber) } > {pNumber} </li>
                                    )   
                                })
                            }
                            <li onClick = {() => onGetMoreArtits() }>  more >> </li>
                        </ul>
                    </div>
                </div>
            )
        }else
            return ( <div/> )
    }else
        return (
              <div className='list'>
                    List is here 
            </div>
        )
}


List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        mbid: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired),
    onItemSelected: PropTypes.func.isRequired,
    onOutOfPageRange: PropTypes.func.isRequired
}


export default List
