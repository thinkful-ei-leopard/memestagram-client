import React, { Component } from 'react'
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
    console.log(error);

    return (
      <>
        <header><Link to='/'><p>{'< Back'}</p></Link></header>
        <form className='LoginForm' onSubmit={this.handleSubmit}>

          <p>{error}</p>

          <div className='login-input'>
            <Label htmlFor='login-username'> Username </Label>
            <Input ref={this.firstInput} id='login-username' name='username' required />

          </div>
          <div className='login-input'>
            <Label htmlFor='login-password'>Password</Label>
            <Input id='login-password' name='password' type='password' required/>
          </div>
          <div className='login-input'>
          <Button type='submit'> Login </Button>
          <Link to='/register'>Not signed up yet?</Link>
          </div>
      </form>
     </>
    )
  }
  
}

export default Login 