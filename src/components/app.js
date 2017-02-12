'use strict'
/**
 * application's view entrance 
 */
import React from 'react'

import SearchContainer from '../containers/search_container'
import MainContentContainer from '../containers/main_content_container'

const App = () => (
  <div>
    <SearchContainer />
    <MainContentContainer />
  </div>
)

export default App