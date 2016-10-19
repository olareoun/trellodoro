import { combineReducers } from 'redux'

import {
  FETCH_TASKS_ATTEMPTED,
  FETCH_TASKS_SUCCEEDED,
  FETCH_TASKS_FAILED,
  SELECT_TASK,
  UPDATE_TASK_TIME,
  ADD_TODO
} from './actions'

export * from './actions'

function taskIds(state=[], action) {
  switch(action.type) {
    case FETCH_TASKS_SUCCEEDED:
      return state.concat(action.payload.result)
    case ADD_TODO:
      if (state.indexOf(action.payload.id) >= 0) return state
      return state.concat([action.payload.id])
    default:
      return state
  }
}

function byId(state={}, action) {
  switch(action.type) {
    case FETCH_TASKS_SUCCEEDED:
      return Object.assign({}, state, action.payload.entities.tasks)
    case ADD_TODO:
      if (state[action.payload.id]) return state
      const task = Object.assign({ time: 0 }, action.payload)
      return Object.assign({}, state, { [action.payload.id]: task })
    case UPDATE_TASK_TIME:
      const { currentTaskId, frame } = action.payload
      let currentTask = state[currentTaskId]
      if (currentTask) {
        currentTask = Object.assign({}, currentTask)
        currentTask.time = currentTask.time + frame.value()
        return Object.assign(
          {},
          state,
          { [currentTaskId]: currentTask }
        )
      }
    default:
      return state
  }
}

function currentTaskId(state=false, action) {
  switch(action.type) {
    case SELECT_TASK:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  taskIds,
  byId,
  currentTaskId
})
