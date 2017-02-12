'use strict'
/**
 * content reducer
 */
const content = (state = {}, action) => {
    switch (action.type){
        case 'ADD_ARTISTS':
            console.log('BEFORE UPDATE ', state);
            state.artists = action.artist
            console.log('AFTER UPDATE ', state);
            return Object.assign({}, state, {
                artist: action.artist
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