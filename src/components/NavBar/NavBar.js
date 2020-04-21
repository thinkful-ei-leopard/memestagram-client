import React from 'react'
import { Link } from 'react-router-dom'
//double check where/what context is!
//Auth tokens dont exist yet (4/21 @ 12:45)
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './NavBar.css'

class NavBar extends React.Component {

  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <div className='nav-right'>
        <span>
          {this.context.user.name}
        </span>
        <div>
          <Link
            onClick={this.handleLogoutClick}
            to='/login'
            className='logout'>
            Logout
          </Link>
          <Link to='/dashboard' className='dashboard'>Dashboard</Link>
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
            ? this.renderLogoutLink()
            : this.renderLoginLink()
          }

          {TokenService.hasAuthToken()
            ? <Link to='/settings'> <div className='nav-bar-user-image'> <img src={this.context.userImage} alt='user image'></img> </div> </Link>
            : <Link to='/login'> <div className='nav-bar-no-image'></div> </Link>
          }
        </nav>
      </header>
    )
  }
}