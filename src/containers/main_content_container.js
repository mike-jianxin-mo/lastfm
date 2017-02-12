'use strict'
/**
 * main section container
 */
import { connect } from 'react-redux'
import MainContent from '../components/main_content'
import { ShowItem, GetNewArtists, SwitchPage, BackToList, ShowLocalItem, SelectLoadedItem }  from '../actions/search_action'

const mapStateToProps = (state) => {
  console.log('BEFORE START MAPPING ', state);
  return {
      showList: state.content.showList,
      showDetails: state.content.showDetails,
      details: state.content.details,
      currentId: state.content.currentId,
      artists: state.content.artists,
      currentPage: state.content.currentPage
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onItemSelected : (name, mbid) => {
      dispatch(ShowItem(name, mbid));
    },
    onSelectLoadedItem : (name, mbid) => {
      dispatch(SelectLoadedItem(name, mbid));
    },
    onOutOfPageRange : () => {
      dispatch(GetNewArtists())
    },
    onSwitchPage : (pageNumber) => {
      dispatch(SwitchPage(pageNumber))
    },
    onBackToList : () => {
      dispatch(BackToList())
    }
  }
}

const MainContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContent)

export default MainContentContainer
