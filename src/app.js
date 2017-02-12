'use strict';
/**
 * application's main entrance file
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import artistSearchReducer from './reducers'
import thunk from 'redux-thunk'
import App from './components/app'

let initVar =   {
    apiKey : '',
    sessionKey : '',
    showList : true,
    showDetails : false,
    searchCountry : '',
    list : [],
    details : {}
  };

const initialState = {
    apiKey : initVar.apiKey,
    sessionKey : initVar.sessionKey,
    // content : {showList: true, showDetails: false, artists: [{name:'testing', mbid:'testing'}], details: {test: {name:'testing'}}, currentId: 'test'},
    content : {showList: true, showDetails: false, artists: [], details: {}, currentId: ''},
};

console.log(initialState);

let store = createStore(artistSearchReducer, initialState, applyMiddleware(thunk))

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('artist')
)