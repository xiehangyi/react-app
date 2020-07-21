import { ADDNAME, ADDAGE } from './action-type'
import { combineReducers } from 'redux'
function addName (state = 'initRedux', action) {
  switch (action.type) {
    case ADDNAME:
      if (action.data) {
        return action.data
      } else {
        return '正在处理'
      }
    default:
      return state
  }
}

function addAge (state = 'x', action) {
  switch (action.type) {
    case ADDAGE:
      return action.data
    default:
      return state
  }
}

export const finalReducer = combineReducers({
  addName, addAge
})
