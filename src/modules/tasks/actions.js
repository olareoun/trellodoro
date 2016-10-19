import {
  FETCH_TASKS_ATTEMPTED,
  FETCH_TASKS_SUCCEEDED,
  FETCH_TASKS_FAILED,
  SELECT_TASK,
  ADD_TODO
} from './action_types'

import { getBoards, getCards } from '../../utils/trello'
import { Schema, arrayOf, normalize } from 'normalizr'

export * from './action_types'

const tasksSchema = new Schema('tasks')

export function addTodo(task) {
  return {
    type: ADD_TODO,
    payload: task
  }
}

export function selectTask(taskId) {
  return {
    type: SELECT_TASK,
    payload: taskId
  }
}

export function getTasks() {
  return (dispatch, getState) => {
    dispatch({
      type: FETCH_TASKS_ATTEMPTED
    })
    getBoards()
    .then((boards) => {
      boards.filter((board) => !board.closed).forEach((board) => {
        getCards(board.id)
        .then((cards) => {
          const tasks = cards.map((card) => ({ description: `${board.name} - ${card.name}`, id: card.id, time: 0 }))
          const normalized = normalize(tasks, arrayOf(tasksSchema))
          dispatch({
            type: FETCH_TASKS_SUCCEEDED,
            payload: normalized
          })
        })
      })
    })
  }
}
