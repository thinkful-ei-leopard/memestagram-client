import React, { Component } from 'react'
import { Input, Label } from '../Form/Form'
import Button from '../Button/Button'
import Navbar from '../NavBar/NavBar'
import AuthApiService from '../../services/auth-api-service';
import MemeContext from '../../context/MemeContext';
import { Link } from 'react-router-dom';
import './UserSettings.css'

//Work in progress as of 5/11/2020
export default class UserSetting extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            newName: ''
        }
        
      }
      static contextType = MemeContext
      
    handleSubmit=(event)=> {
    event.preventDefault()
     const { newName }=event.target
     AuthApiService.updateUsername(
      this.context.user.id,
       newName.value
     )
     .then(user =>{
      this.setState({
        newName:newName.value
       })
     })
     .catch(res =>{
      this.setState({
          error:JSON.stringify(res.error)
      })
     })
     }

     handleLogoutClick = () => {
      this.context.processLogout()
    }
     renderLogoutLink() {
      return (
        <div className='nav-right'>
          <div>
            <Link
              onClick={this.handleLogoutClick}
              to='/login'
              className='logout'>
              Login again
            </Link>
          </div>
        </div>
      )
    }
    
    render() {
        return (
            <div>
                <Navbar />
              <div className='setting'>
              <form onSubmit={this.handleSubmit}> 
              <Label htmlFor='newName'>Update your new username</Label>
              <Input type='text' id='newName' name='newName' required></Input>
              <Button type='submit'>Save</Button>
              </form>
             <h4>New Name: {this.state.newName}</h4>
             <p>Please login again with your new username after you save the change</p> 
            {this.renderLogoutLink()}
            </div>   
            </div>
          );
        }
      };

