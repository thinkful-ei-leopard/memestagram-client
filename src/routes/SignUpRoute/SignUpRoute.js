import React, { Component } from 'react'
import SignUp from '../../components/SignUp/SignUp'

class SignUpRoute extends Component {
    static defaultProps = {
      history: {
        push: () => {},
      },
    }
  
    handleSignUpSuccess = () => {
      const { history } = this.props
      history.push('/login')
    }
  
    render() {
      return (
        <section className='login-signup-form'>
          <p>
            Memestagram
          </p>
          <h2>Sign up</h2>
          <SignUp
            onSignUpSuccess={this.handleSignUpSuccess}
          />
        </section>
      );
    }
  }
  
  export default SignUpRoute