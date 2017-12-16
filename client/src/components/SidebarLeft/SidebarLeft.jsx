import React, { Component } from 'react'

import { List, ListItem, Drawer, Subheader } from 'material-ui'

import ActionHome from 'material-ui/svg-icons/action/home'
import ContentInbox from 'material-ui/svg-icons/content/inbox'
import ContentDrafts from 'material-ui/svg-icons/content/drafts'
import ContentSend from 'material-ui/svg-icons/content/send'

import './SidebarLeft.css'

class SidebarLeft extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  componentWillReceiveProps = nextProps => {
    this.setState({ open: nextProps })
  }

  render () {
    return (
      <Drawer containerClassName='drawer' open={this.props.handleOpen} >    
        <Subheader className='subheader' onClick={() => this.props.handleDrawer(!this.state.open)} >close</Subheader>
        <List>
          <ListItem primaryText='Home' leftIcon={<ActionHome />} />
          <ListItem primaryText='Drafts' leftIcon={<ContentDrafts />} />
          <ListItem
            primaryText='Inbox'
            leftIcon={<ContentInbox />}
            nestedItems={[
              <ListItem
                key={1}
                primaryText='Starred'
                leftIcon={<ActionHome />}
              />,
              <ListItem
                key={2}
                primaryText='Sent Mail'
                leftIcon={<ContentSend />}
                nestedItems={[
                  <ListItem key={1} primaryText='Drafts' leftIcon={<ContentDrafts />} />
                ]}
              />,
              <ListItem
                key={3}
                primaryText='Inbox'
                leftIcon={<ContentInbox />}
                nestedItems={[
                  <ListItem key={1} primaryText='Drafts' leftIcon={<ContentDrafts />} />
                ]}
              />
            ]}
          />
        </List>
      </Drawer>
    )
  }
}

export default SidebarLeft
