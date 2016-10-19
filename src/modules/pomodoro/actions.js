import {
  START,
  UPDATE,
  STOP,
  RESET
} from './action_types'

import {
  UPDATE_TASK_TIME,
} from '../tasks/action_types'

export * from './action_types'


export function start() {
  return {
    type: START
  }
}

export function reset() {
  return {
    type: RESET
  }
}

export function stop() {
  return {
    type: STOP
  }
}

export function update(lastTimestamp, currentTaskId) {
  return (dispatch, getState) => {
    const frame = new TimeFrame(lastTimestamp, Date.now())
    const payload = { frame, currentTaskId }
    dispatch({
      type: UPDATE,
      payload
    })
    dispatch({
      type: UPDATE_TASK_TIME,
      payload
    })
  }
}

class TimeFrame {
  constructor(init, end) {
    this.init = init
    this.end = end
  }

  value() {
    return (this.end - this.init)
  }
}
