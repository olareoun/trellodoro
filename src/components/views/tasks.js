import React from 'react'
import Task from './task'

export default ({ onSelect, tasks }) => (
  <div className="tasks">
    {
      tasks.map((task) => <Task key={task.id} task={task} onSelect={ onSelect } />)
    }
  </div>
)
