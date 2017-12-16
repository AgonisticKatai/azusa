import React, { Component } from 'react'

import { Redirect } from 'react-router-dom'

import { login } from '../../services/AuthServices.js'
import { saveToken } from '../../services/StorageServices.js'

import { TextField, RaisedButton, Snackbar } from 'material-ui'

import './LoginPage.css'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      token: false,
      username: false,
      password: false
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { username, password } = this.state
    try {
      const token = await login(username, password)
      saveToken(token)
      this.setState({ token: true })    
    } catch (error) {
      this.setState({ open: true })
    }
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    })
  }

  render () {
    return (
      <form onSubmit={ this.handleSubmit } className='login-form'>
          <ul className='login-ul'>
            <li>
              <TextField
                name='username'
                className='login-li'
                hintText='Username'
                floatingLabelText='Username'
                onChange={ this.handleChange }
              />
            </li>
            <li>
              <TextField
                name='password'
                className='login-li'
                type='password'
                hintText='Password'
                floatingLabelText='Password'
                onChange={ this.handleChange }
              />
            </li>
            <RaisedButton type='submit' className='login-button' label='Login' fullWidth={ true } primary={ true } />
          </ul>
          <Snackbar
            open={this.state.open}
            message="Invalid username or password"
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
          />
          { this.state.token && <Redirect to={'/admin'} push /> }  
      </form>
    )
  }
}

export default Login
