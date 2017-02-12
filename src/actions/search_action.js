'use strict'

/**
 * action after user click search button, used for getting artists from remote service
 */
export const SearchArtistByCountry = (country) => {
    /*
    return {
        type: 'SEARCH',
        country: country
    }
    */

    return dispatch => {
        try{
            country = 'china'  // just for test
            let url = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=' + country + '&api_key=1abe7c7dfefac6f21af747c44c846861&format=json'
            return fetch(url)
                .then(function(response){
                    console.log(response);
                    if (response){
                        if(response.status !== 200){
                            console.log('Looks like there was a problem. Status Code: ' + response.status);
                            return; 
                        }
                        response.json().then(function(data){ 
                            
                            console.log('Successfully get artists ', data);
                            // 
                            dispatch(AddArtists(data.topartists.artist));
                            
                            
                        })
                    }
                })
        }catch(err){
            console.log('request fail')
        }
    }
    /*
        return dispatch => {
            dispatch(AddArtists([{name: 'RRRR', mbid: 'UUUUUUU-908908'}, {name: 'YYYYYRRRR', mbid: '4325346-UUUUUUU-908908'}]));
        }
    */
}

/**
 * action for adding artists list to store
 */
export const AddArtists = ( artistList) => {
    return {
        type: 'ADD_ARTISTS',
        artist: artistList
    }
}

/**
 * action for getting artist details informations from remote service
 */
export const ShowItem = (name) => {
    /*
    return {
        type: 'SHOW_ARTIST',
        id: mId
    }
    */
    
    let url = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + name + '&api_key=1abe7c7dfefac6f21af747c44c846861&format=json'
    return dispatch => {
        try{
            return fetch(url)
                .then(function(response){
                    console.log(response);
                    if (response){
                        if(response.status !== 200){
                            console.log('Looks like there was a problem. Status Code: ' + response.status);
                            return; 
                        }
                        response.json().then(function(data){ 
                            
                            console.log('Successfully get artists details ', data);
                            // 
                            dispatch(AddAndShowArtistDetails(data.artist));
                            
                            
                        })
                    }
                })
        }catch(err){
            console.log('request fail')
        }
    }
}

/**
 * add artist information to store
 */
export const AddAndShowArtistDetails = ( artist ) => {
    return {
        type: 'ADD_AND_SHOW_ARTIST_DETAILS',
        artist: artist
        
    }
}

/**
 * switch page action
 */
export const SwitchPage = (pageNumber) => {
    return {
        type: 'SWITCH_PAGE',
        pageNumber: pageNumber
    }    
}

/**
 * back to artists list action
 */
export const BackToList = () => {
    return {
        type: 'BACK_TO_LIST_PAGE'
    }    
}

