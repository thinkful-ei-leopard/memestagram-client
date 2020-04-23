import React, { Component } from 'react'
import {Input, Label}from '../Form/Form'
import Button from '../Button/Button'
class Login extends Component{

  render() {
    
    return (
      <form className='login'>
        <div className='login-input'>
          <Label htmlFor='login-username'> Username </Label>
          <Input id='login-username' name='username' required />
        </div>
        <div className='login-input'>
          <Label htmlFor='login-password'>Password</Label>
          <Input id='login-password' name='password' type='password' required/>
        </div>
        <div className='login-input'>
        <Button type='submit'> Login </Button>
        </div>
     </form>
    )
  }
  
}

export default Login 