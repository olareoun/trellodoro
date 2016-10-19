import React from 'react'
import Section from '../layouts/section'

const Card = ({ card, description, addTodo }) => (
  <div className="card">
    <span>{ card.name }</span>
    &nbsp;
    <a className="clickable"
      onClick={ () => addTodo({ id: card.id, description: description }) }>
      Add todo
    </a>
  </div>
)

const Board = ({ board, cards, addTodo }) => (
  <Section title={`Board "${board.name}"`}>
    {
      cards.map((card) => {
        const description = `${board.name} - ${card.name}`
        return (
          <Card
            key={ card.id }
            card={ card }
            addTodo={ addTodo }
            description={ description } />
        )
      })
    }
  </Section>
)

export default Board
