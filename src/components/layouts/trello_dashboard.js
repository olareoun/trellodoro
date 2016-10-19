import React from 'react'
import Page from './page'

const TrelloDashboard = (props) => (
  <Page title="Trello Dashboard">
    { props.children }
  </Page>
)

export default TrelloDashboard
