import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LoginPage from './LoginPage/LoginPage.jsx'
import AdminPage from './AdminPage/AdminPage.jsx'
import HomePage from './HomePage/HomePage.jsx'

import './Main.css'

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/admin' component={AdminPage} />
        <Route path='/home' component={HomePage} />
      </Switch>
    </div>
  )
}

export default Main
