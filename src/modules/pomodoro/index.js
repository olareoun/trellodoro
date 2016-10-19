import {
  START,
  UPDATE,
  STOP,
  RESET
} from './actions'

import { combineReducers } from 'redux'

export * from './actions'

function time(state=0, action) {
  switch(action.type){
    case UPDATE:
      return (state + action.payload.frame.value())
    case RESET:
      return 0
    default:
      return state
  }
}

function running(state=false, action) {
  switch(action.type){
    case START:
      return true
    case STOP:
      return false
    case RESET:
      return false
    default:
      return state
  }
}

function currentTimestamp(state=0, action) {
  switch(action.type){
    case START:
      return (state || Date.now())
    case UPDATE:
      return action.payload.frame.end
    case STOP:
      return 0
    case RESET:
      return 0
    default:
      return state
  }
}

export default combineReducers({
  currentTimestamp, time, running
})
