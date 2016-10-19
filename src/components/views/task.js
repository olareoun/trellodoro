import React from 'react'
import Timer from './timer'
import classNames from 'classnames'

export default ({ task, onSelect }) => (
  <div className={classNames("task", { current: task.current })}>
    <span>{ task.description }</span>
    <Timer time={task.time} />
    <a className="clickable" onClick={ () => onSelect(task) }>Seleccionar</a>
  </div>
)
