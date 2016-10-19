import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCards } from '../../modules/trello'
import { addTodo } from '../../modules/tasks'
import View from '../views/board'

class Board extends Component {

  componentDidMount() {
    this.props.getCards(this.props.params.id)
  }

  render() {
    const { cards, board, addTodo } = this.props
    return (
      <View board={ board } cards={ cards } addTodo={ addTodo } />
    )
  }
}

const mapStateToProps = (state, props) => {
  const board = state.trello.byId[props.params.id]
  const cards = state.trello.cardIds.map(id => {
    let card = state.trello.cardsById[id]
    return card
  })
  return { cards, board }
}

const mapDispatchToProps = { getCards, addTodo }

export default connect(mapStateToProps, mapDispatchToProps)(Board)
