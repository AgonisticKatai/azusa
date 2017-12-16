import React, { Component } from 'react'

import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider } from 'material-ui'

import Main from './components/Main.jsx'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}

export default App
