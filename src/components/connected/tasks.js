import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectTask } from '../../modules/tasks'
import View from '../views/tasks'

class Tasks extends Component {

  render() {
    const { tasks, selectTask } = this.props
    return (
      <View tasks={tasks}
        onSelect={ (task) => selectTask(task.id) } />
    )
  }
}

const mapStateToProps = state => {
  const { currentTaskId } = state.tasks
  const tasks = state.tasks.taskIds.map(id => {
    let task = state.tasks.byId[id]
    let isCurrent = (id === currentTaskId)
    return Object.assign({ current: isCurrent }, task)
  })
  return { tasks }
}

const mapDispatchToProps = { selectTask }

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
