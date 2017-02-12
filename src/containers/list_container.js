'use strict'
/**
 * list container 
 */
import { connect } from 'react-redux'
import List from '../components/list'
import { ShowItem }  from '../actions/search_action'

const mapStateToProps = (state) => {
  return {
    items : state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onItemSelected : (name) => {
      dispatch(ShowItem(name));
    }
  }
}

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default ListContainer

