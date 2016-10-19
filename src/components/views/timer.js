import React from 'react'
import { extractTime, twoDigits, threeDigits } from '../../utils/time';

export default (props) => {
  let formattedTime = extractTime(props.time)
  return (
    <div className="timer">
      <span className="timer-h">{ twoDigits(formattedTime.h) }</span>
      <span className="timer-m">:{ twoDigits(formattedTime.m) }</span>
      <span className="timer-s">:{ twoDigits(formattedTime.s) }</span>
      <span className="timer-s">:{ threeDigits(formattedTime.ms) }</span>
    </div>
  )
}
