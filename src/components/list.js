'use strict'
/**
 * artist list view section
 */
import React, { PropTypes } from 'react'

let style = {
    display: 'inline-block',
}

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

                                        let imageUrl = ''
                                        if(item){
                                            for(var i = 0; i < item.image.length; i++){
                                                if(item.image[i].size ==="large"){
                                                    imageUrl = item.image[i]['#text']
                                                }
                                            }
                                            if(!imageUrl && item.image[i].length > 0)
                                                imageUrl = item.image[0].url
                                        }

                                        return (
                                            <li value={item.mbid} key={item.mbid} >
                                                <div className='brand-image'><img src={imageUrl}  onClick={() => onItemSelected(item.name, item.mbid)} /></div>
                                                <div className='artist-name'>{item.name}</div>
                                            </li>
                                        )
                                    })
                            }
                        </ul>   
                    </div>
                    <div className='pagination' >
                        <ul>
                            {
                                pageNumbers.map( pNumber =>{
                                    return (
                                        <li style={style} value={pNumber} key={pNumber} onClick = {() => onSwitchPage(pNumber) } >&nbsp; {pNumber}&nbsp; </li>
                                    )   
                                })
                            }
                            { pageNumbers.length ? <li onClick = {() => onGetMoreArtits() }> &nbsp;&nbsp;&nbsp; more >> </li>: null }
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
