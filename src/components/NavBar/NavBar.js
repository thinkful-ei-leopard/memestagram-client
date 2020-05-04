import React from 'react'
import { Link } from 'react-router-dom'
//Auth tokens dont exist yet (4/21 @ 12:45)
import TokenService from '../../services/token-service'
import MemeContext from '../../context/MemeContext'
import './NavBar.css'

export default class NavBar extends React.Component {

  state = {
    count: 0,
    user: [],
  }

  static contextType = MemeContext

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
            Logout
          </Link>
        </div>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='nav-right'>
        <Link to='/login' className='login'>Login</Link>
        {' '}
        <Link to='/register' className='reg'>Sign up</Link>
      </div>
    )
  }

  render(){
    return(
      <header>
        <nav>
          <h1 className='home-link'>
            {TokenService.hasAuthToken()
              ? <Link to='/dashboard'> MEMESTAGRAM </Link>
              : <Link to='/'> MEMESTAGRAM </Link>
            }
          </h1>

          {TokenService.hasAuthToken()
            ? <Link to={`/user/${this.context.user.id}`}> <div className='image-cropper'> <img src={this.context.user.userImg} alt='user' className='nav-bar-user-image'></img> </div> </Link>
            : <Link to='/login'> <div className='nav-bar-no-image'></div> </Link>
          }

          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()
          }

          
          <Link to='/addPost'>Add Post</Link>
        </nav>
      </header>
    )
  }
}