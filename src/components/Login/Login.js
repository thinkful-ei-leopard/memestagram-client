import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import {Input, Label}from '../Form/Form'
import Button from '../Button/Button'
import AuthApiService from '../../services/auth-api-service'
import MemeContext from '../../context/MemeContext'


class Login extends Component{

  static defaultProps = {
    onLoginSuccess: () => { }
  }

  static contextType = MemeContext

  state = { error: null }

  firstInput = React.createRef()

  handleSubmit = ev => {
    ev.preventDefault()
    const { username, password } = ev.target

    this.setState({ error: null })

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        username.value = ''
        password.value = ''
        this.context.processLogin(res.authToken)
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  componentDidMount() {
    this.firstInput.current.focus()
  }

  render() {
    
    const { error } = this.state

    return (
      <>
        <form className='LoginForm' onSubmit={this.handleSubmit}>

          <p>{error}</p>

          <div className='login-input'>
            <Label htmlFor='username' aria-label='name'><FontAwesomeIcon icon='user' /></Label>
            <Input ref={this.firstInput} id='username' name='username' placeholder='Username'required />

          </div>
          <div className='login-input'>
            <Label htmlFor='password'aria-label='password'><FontAwesomeIcon icon='lock' /></Label>
            <Input id='password' name='password' type='password' placeholder='Password' required/>
          </div>
          <div className='login-input'>
          <Button type='submit'> Login </Button>
          <Link to={'/'} className='landbtn'> Cancel </Link>
          <div >
          <Link to='/register'>Not signed up yet?</Link>
          </div>
          </div>
      </form>
     </>
    )
  }
  
}

export default Login 