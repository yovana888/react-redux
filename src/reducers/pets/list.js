import { combineReducers } from 'redux'
import { PET_ERROR, PET_LIST, PET_LOADING } from '../../actions/pets/list'

const error2 = (state = null, action) => {
  switch (action.type) {
    case PET_ERROR:
      return action.error
    default:
      return state
  }
}

const loading2 = (state = false, action) => {
  switch (action.type) {
    case PET_LOADING:
      return action.loading
    default:
      return state
  }
}

const data2 = (state = [], action) => {
  switch (action.type) {
    case PET_LIST:
      return action.data
    default:
      return state
  }
}


export default combineReducers({ error2, loading2, data2 })