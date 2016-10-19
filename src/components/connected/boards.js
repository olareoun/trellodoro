import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { getBoards } from '../../modules/trello'
import View from '../views/boards'

class Boards extends Component {

  componentDidMount() {
    this.props.getBoards()
  }

  render() {
    const { boards } = this.props
    return (
      <View boards={ boards } />
    )
  }
}

const mapStateToProps = state => {
  const boards = state.trello.boardIds.map(id => {
    let board = state.trello.byId[id]
    return board
  })
  return { boards }
}

const mapDispatchToProps = { getBoards }

export default connect(mapStateToProps, mapDispatchToProps)(Boards)
