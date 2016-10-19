import React from 'react'
import Section from '../layouts/section'
import { browserHistory } from 'react-router'

const Board = ({ board }) => (
  <div key={ board.id }
    className="board clickable"
    onClick={ () => browserHistory.push(`/trello/${board.id}`) }>
    <span>{ board.name }</span>
  </div>
)

const Boards = ({ boards }) => (
  <Section title="Boards">
    {
      boards.map((board) => <Board board={ board } key={ board.id } />)
    }
  </Section>
)

export default Boards
