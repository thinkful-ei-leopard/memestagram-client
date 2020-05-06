import React, { Component } from 'react'
import Login from '../../components/Login/Login'



class LoginRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/dashboard'
    history.push(destination)
  }

  
  render() {
    return (
      <section className='login-title'>
        <h1 className='appname'>Memestagram</h1>
        <h2>Login</h2>
        <Login onLoginSuccess={this.handleLoginSuccess}/>
      </section>
    );
  }
}

export default LoginRoute