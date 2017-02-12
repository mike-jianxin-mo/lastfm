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
            let url = Config.baseUrl + '?method=geo.gettopartists&country=' + country + '&api_key=' + Config.apiKey + '&format=' + Config.format
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
export const ShowItem = (name, mbid) => {
    /*
    return {
        type: 'SHOW_ARTIST',
        id: mId
    }
    */
    let url = Config.baseUrl + '?method=artist.gettoptracks&artist=' + name + '&api_key=' + Config.apiKey + '&format=' + Config.format
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
                            dispatch(AddAndShowArtistDetails(name, mbid, data.toptracks.track));
                            
                            
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
export const AddAndShowArtistDetails = ( name, mbid, toptracks ) => {
    return {
        type: 'ADD_AND_SHOW_ARTIST_DETAILS',
        mbid: mbid,
        name: name,
        toptracks: toptracks
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

