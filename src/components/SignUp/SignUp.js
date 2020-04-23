import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Required, Label } from '../Form/Form'
import AuthApiService from '../../services/auth-api-service'
import Button from '../Button/Button'
import ImageUpload from '../Image-Upload/Image-Upload'

// import Spinner from '../Image-Upload/Spinner'
// import Images from '../Image-Upload/Images'

export default class SignUp extends Component { 
    static defaultProps = {
        onSignUpSuccess: () => { }
        }
    state = { error: null }
    firstInput = React.createRef()

    handleSubmit = ev => {
        ev.preventDefault()
        const { name, username, password } = ev.target
        AuthApiService.postUser({
            name: name.value,
            username: username.value,
            password: password.value,
          })
            .then(user => {
              name.value = ''
              username.value = ''
              password.value = ''
              this.props.onSignUpSuccess()
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
        <form
        className='form'
        onSubmit={this.handleSubmit}
      >
        <div>
          <ImageUpload />
        </div>
        <div role='alert'>
          {error && <p>{error}</p>}
        </div>
        <div>
          <Label htmlFor='registration-name-input'>
            Enter your name<Required />
          </Label>
          <Input
            ref={this.firstInput}
            id='registration-name-input'
            name='name'
            required
          />
        </div>
        <div>
          <Label htmlFor='registration-username-input'>
            Choose a username<Required />
          </Label>
          <Input
            id='registration-username-input'
            name='username'
            required
          />
        </div>
        <div>
          <Label htmlFor='registration-password-input'>
            Choose a password<Required />
          </Label>
          <Input
            id='registration-password-input'
            name='password'
            type='password'
            required
          />
        </div>
        <footer className='form-footer'>
          <Button type='submit' className='form-footer-button'>
            Sign up
          </Button>
          {' '}
          <Link to='/login' className='form-footer-link'>Already have an account?</Link>
        </footer>
      </form>
            
            
        )
    }
}

