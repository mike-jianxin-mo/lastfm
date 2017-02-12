'use strict'
/**
 * content reducer
 */
const content = (state = {}, action) => {
    switch (action.type){
        case 'ADD_ARTISTS':
            console.log('BEFORE UPDATE ', state);
            // let artists = state.artists
            // artists.push(action.artists)
            // artists.push(...state.artists);
            // artists.push.apply(artists, action.artists)
            // state.artists = action.artist
            let artists = action.artists
            
            let newArtists = []
            if(action.remotePageNumber == 1){
                newArtists = action.artists
            }else{
                for(var i=0; i < state.artists.length; i ++){
                    newArtists.push(state.artists[i]);
                }
                newArtists.push.apply(newArtists, action.artists)
            }
            console.log('AFTER UPDATE ', state);
            return Object.assign({}, state, {
                artists: newArtists,
                remotePageNumber: action.remotePageNumber,
                country: action.country
            })

        case 'SHOW_LIST':
            console.log(state);
            state.showDetails = false
            state.showList = true 
            return state
        case 'ADD_AND_SHOW_ARTIST_DETAILS':
            console.log('IN SHOW/HID', action);

            let details = state.details
            details[action.mbid] = action.toptracks 
            return Object.assign({}, state, {
                showDetails: true,
                showList: false,
                details : details,
                currentId : action.mbid,
                currentName : action.name
            })
        case 'SHOW_ALREADY_LOADED_ITEM':
            return Object.assign({}, state, {
                showDetails: true,
                showList: false,
                currentId : action.mbid
            })
        case 'SWITCH_PAGE':
            console.log('SWITCHING PAGE ... ', action);  
            return Object.assign({}, state, {
                currentPage: action.pageNumber
            })   
        case 'BACK_TO_LIST_PAGE':
            return Object.assign({}, state, {
                showDetails: false,
                showList: true
            })
        default:
            return state
    }        
}

export default content