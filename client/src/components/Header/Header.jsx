import React, { Component } from 'react'

import { AppBar, IconButton } from 'material-ui'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'

import './Header.css'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  render () {
    return (
      <AppBar
        className='appbar'
        iconElementLeft={
          <IconButton
            onClick={() => this.props.handleDrawer(!this.state.open)}>
            <NavigationMenu className='icon' />
          </IconButton>
        }
        title='Azusa'

      />
    )
  }
}

export default Header
