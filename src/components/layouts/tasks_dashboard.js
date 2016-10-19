import React from 'react'
import Tasks from '../connected/tasks'
import Pomodoro from '../connected/pomodoro'
import Section from './section'

const TasksDashboard = (props) => (
  <div className="tasks-dashboard">
    <Pomodoro />
    <Section title="Todo">
      <Tasks />
    </Section>
  </div>
)

export default TasksDashboard
