import { combineReducers } from 'redux'

import {
  FETCH_BOARDS_ATTEMPTED,
  FETCH_BOARDS_SUCCEEDED,
  FETCH_BOARDS_FAILED,
  FETCH_CARDS_ATTEMPTED,
  FETCH_CARDS_SUCCEEDED,
  FETCH_CARDS_FAILED
} from './actions'

export * from './actions'

function boardIds(state=[], action) {
  switch(action.type) {
    case FETCH_BOARDS_ATTEMPTED:
      return []
    case FETCH_BOARDS_SUCCEEDED:
      return action.payload.result
    default:
      return state
  }
}

function byId(state={}, action) {
  switch(action.type) {
    case FETCH_BOARDS_SUCCEEDED:
      return Object.assign({}, state, action.payload.entities.boards)
    default:
      return state
  }
}

function cardIds(state=[], action) {
  switch(action.type) {
    case FETCH_CARDS_ATTEMPTED:
      return []
    case FETCH_CARDS_SUCCEEDED:
      return action.payload.result
    default:
      return state
  }
}

function cardsById(state={}, action) {
  switch(action.type) {
    case FETCH_CARDS_SUCCEEDED:
      return Object.assign({}, state, action.payload.entities.cards)
    default:
      return state
  }
}

export default combineReducers({
  boardIds,
  byId,
  cardIds,
  cardsById
})
