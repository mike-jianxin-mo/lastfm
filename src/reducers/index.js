'use strict'
/**
 * reducer
 */
import { combineReducers } from 'redux'
import content from './main_content'

const artistSearch = combineReducers({
    apiKey:  (state = '', action) => state,
    sessionKey: (state = '', action) => state,
    searchCountry: (state = '', action) => state,
    content
})

export default artistSearch
