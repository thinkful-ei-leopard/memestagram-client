import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Required, Label } from '../Form/Form'

export default class SignUp extends Component { 
    static defaultProps = {
        onRegistrationSuccess: () => { }
        }
    state = { error: null }
    firstInput = React.createRef()

    handleSubmit = ev => {
        ev.preventDefault()
        const { name, username, password } = ev.target
        
    }

    render() {
       
        return (
            
            
        )
    }
}