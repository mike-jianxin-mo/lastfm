'use strict'

/**
 * action after user click search button, used for getting artists from remote service
 */
var Config = require('Config')
export const SearchArtistByCountry = (country, page = 1) => {
    return dispatch => {
        try{
            let url = Config.baseUrl + '?method=geo.gettopartists&country=' + country + '&api_key=' + Config.apiKey + '&format=' + Config.format + '&page=' + page
            return fetch(url)
                .then(function(response){
                    if (response){
                        if(response.status !== 200){
                            alert('Request fail, please try again later Status Code: ' + response.status);
                            console.log('Looks like there was a problem. Status Code: ' + response.status);
                            return; 
                        }
                        response.json().then(function(data){ 
                            
                            if(data.error)
                                alert('Request fail, the return message is "' + data.message + '", the message code is [' + data.error + ']' )
                            else 
                                dispatch(AddArtists(data.topartists.artist, page, country));
                            
                            
                        })
                    }
                })
        }catch(err){
            alert('Request fail, please try again later');
            console.log('request fail', err)
        }
    }
}

/**
 * action for adding artists list to store
 */
export const AddArtists = ( artistList, page, country) => {
    return {
        type: 'ADD_ARTISTS',
        artists: artistList,
        remotePageNumber: page,
        country: country
    }
}

/**
 * action for getting artist details informations from remote service
 */
export const ShowItem = (name, mbid) => {
    let url = Config.baseUrl + '?method=artist.gettoptracks&artist=' + name + '&api_key=' + Config.apiKey + '&format=' + Config.format
    return dispatch => {
        try{
            return fetch(url)
                .then(function(response){
                    if (response){
                        if(response.status !== 200){
                            alert('Request fail, please try again later Status Code: ' + response.status);
                            console.log('Looks like there was a problem. Status Code: ' + response.status);
                            return; 
                        }
                        response.json().then(function(data){ 
                            
                            dispatch(AddAndShowArtistDetails(name, mbid, data.toptracks.track));
                            
                            
                        })
                    }
                })
        }catch(err){
            alert('Request fail, please try again later');
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

/**
 * select already loaded item action
 */
export const SelectLoadedItem = (name, mbid) => {
    return {
        type: 'SHOW_ALREADY_LOADED_ITEM',
        name: name,
        mbid: mbid        
    }
}