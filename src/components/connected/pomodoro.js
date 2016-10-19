import React, { Component } from 'react'
import { connect } from 'react-redux'
import { start, stop, update, reset } from '../../modules/pomodoro'
import View from '../views/pomodoro'

class Pomodoro extends Component {

  componentDidUpdate(prevProps) {
    const { currentTimestamp, currentTaskId, running, update } = this.props
    if (!running) {
      clearTimeout(this.updateFn)
    }
    if (running && this.props.currentTimestamp !== prevProps.currentTimestamp) {
      this.updateFn = setTimeout(() => update(currentTimestamp, currentTaskId), 250)
    }
  }

  render() {
    const {
      time,
      running,
      start,
      stop,
      reset
    } = this.props

    return (
      <View
        time={time}
        onStart={ start }
        onStop={ stop }
        onReset={ reset }
      />
    )
  }
}

const mapStateToProps = state => {
  const { currentTaskId } = state.tasks
  return Object.assign({ currentTaskId }, state.pomodoro)
}

const mapDispatchToProps = {
  start, stop, reset, update
}

export default connect(mapStateToProps, mapDispatchToProps)(Pomodoro)
