import React, { Component } from 'react'
import Button from '../Button/Button'
class Login extends Component{

  render() {
    
    return (
      <form>
        <div className='login-input'>
          <label htmlFor='login-username'> Username </label>
          <input id='login-username' name='username' required />
        </div>
        <div className='login-input'>
          <label htmlFor='login-password'>Password</label>
          <input id='login-password' name='password' type='password' required/>
        </div>
        <div className='login-input'>
        <Button type='submit'> Login </Button>
        </div>
     </form>
    )
  }
  
}

export default Login 