import React from 'react'
import Timer from './timer'
import Countdown from './countdown'

const Pomodoro = ({ time, onStart, onStop, onReset }) => {
  return (
    <div className="pomodoro">
      <div className="content">
        <Countdown time={ time } />
        <Timer time={time} />
        <div className="actions">
          <a className="clickable" onClick={ onStart }>START</a>
          &nbsp;
          <a className="clickable" onClick={ onStop }>STOP</a>
          &nbsp;
          <a className="clickable" onClick={ onReset }>RESET</a>
        </div>
      </div>
    </div>
  )
}

export default Pomodoro
