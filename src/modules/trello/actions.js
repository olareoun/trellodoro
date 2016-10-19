import {
  FETCH_BOARDS_ATTEMPTED,
  FETCH_BOARDS_SUCCEEDED,
  FETCH_BOARDS_FAILED,
  FETCH_CARDS_ATTEMPTED,
  FETCH_CARDS_SUCCEEDED,
  FETCH_CARDS_FAILED
} from './action_types'

import * as Trello from '../../utils/trello'
import { Schema, arrayOf, normalize } from 'normalizr'

export * from './action_types'

const boardsSchema = new Schema('boards')
const cardsSchema = new Schema('cards')

export function getBoards() {
  return (dispatch, getState) => {
    dispatch({
      type: FETCH_BOARDS_ATTEMPTED
    })
    Trello.getBoards()
    .then((boards) => {
      const normalized = normalize(boards, arrayOf(boardsSchema))
      dispatch({
        type: FETCH_BOARDS_SUCCEEDED,
        payload: normalized
      })
    })
  }
}

export function getCards(boardId) {
  return (dispatch, getState) => {
    dispatch({
      type: FETCH_CARDS_ATTEMPTED
    })
    Trello.getCards(boardId)
    .then((cards) => {
      const normalized = normalize(cards, arrayOf(cardsSchema))
      dispatch({
        type: FETCH_CARDS_SUCCEEDED,
        payload: normalized
      })
    })
  }
}
