import React from 'react'
import { extractTime, twoDigits, threeDigits } from '../../utils/time';
import className from 'classnames'

const Countdown = ({ time }) => {
  const pomodoroTime = 1
  const formattedTime = extractTime(time)
  const minutesLeft = pomodoroTime - formattedTime.m - Math.ceil(formattedTime.s / 60)
  const secondsLeft = ((60 - (formattedTime.s)) % 60)
  const finished = (minutesLeft < 0)
  const minutesLeftView = finished? '00' : twoDigits(minutesLeft)
  const secondsLeftView = finished? '00' : twoDigits(secondsLeft)

  return (
    <div className={className("countdown", { finished })}>
      <div id="countdown-data">
        <span className="timer-m">{ minutesLeftView }</span>
        <span className="timer-s">:{ secondsLeftView }</span>
      </div>
    </div>
  )
}

export default Countdown
