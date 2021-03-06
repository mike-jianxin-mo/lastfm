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

const initialState = {
    apiKey : '',
    content : {showList: true, showDetails: false, artists: [], details: {}, currentId: '', currentPage: 1, remotePageNumber: 1, country: '' },
};


let store = createStore(artistSearchReducer, initialState, applyMiddleware(thunk))

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('artist')
)