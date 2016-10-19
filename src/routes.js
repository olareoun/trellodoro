import React from 'react'
import { Route, IndexRoute } from 'react-router'

/* Route handlers/layouts */
import App from 'layouts/app'
import Landing from 'layouts/landing'
import Home from 'views/home'
import TasksDashboard from 'layouts/tasks_dashboard'
import TrelloDashboard from 'layouts/trello_dashboard'
import Boards from 'connected/boards'
import Board from 'connected/board'
import Login from 'connected/login'
import Register from 'connected/register'

import { checkLogged, getSession } from './modules/auth'

export default (
  <Route>
    <Route component={Landing}>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
    </Route>
    <Route component={App}>
      <Route  path='/' component={Home} />
      <Route  path='/dashboard' component={TasksDashboard} />
      <Route  path='/trello' component={TrelloDashboard}>
        <IndexRoute component={Boards} />
        <Route  path=':id' component={Board} />
      </Route>
    </Route>
  </Route>
)
