'use strict'
/**
 * main section container
 */
import { connect } from 'react-redux'
import MainContent from '../components/main_content'
import { ShowItem }  from '../actions/search_action'

const mapStateToProps = (state) => {
  console.log('BEFORE START MAPPING ', state);
  return {
      showList: state.content.showList,
      showDetails: state.content.showDetails,
      details: state.content.details,
      currentId: state.content.currentId,
      artists: state.content.artists
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onItemSelected : (name) => {
      dispatch(ShowItem(name));
    }
  }
}

const MainContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContent)

export default MainContentContainer
