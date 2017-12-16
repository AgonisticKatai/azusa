import React, { Component } from 'react'

import Header from '../Header/Header.jsx'
import SidebarLeft from '../SidebarLeft/SidebarLeft.jsx'
import AvailableContent from '../AvailableContent/AvailableContent.jsx'

import './AdminPage.css'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  handleDrawer = props => {
    this.setState({ open: props })
  }

  render () {
    return (
      <div className='wrapper'>
        <div className='header'>
          <Header handleDrawer={ this.handleDrawer.bind(this) } />
        </div>
        <div className='box sidebar'>
          <SidebarLeft handleOpen={ this.state.open } handleDrawer={ this.handleDrawer.bind(this) } />
        </div>
        <div className='content'>
          <AvailableContent />
        </div>
        <div className='box footer'></div>
      </div>
    )
  }
}

export default Home
