'use strict'
/**
 * search container
 */

import { connect } from 'react-redux'
import Search from '../components/search'
import { SearchArtistByCountry }  from '../actions/search_action'

const mapStateToProps = (state) => {
  return {
    searchCountry: state.searchCountry
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchBtnClick : (searchCountry) => {
      dispatch(SearchArtistByCountry(searchCountry))
    }
  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default SearchContainer

