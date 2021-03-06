import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TokenService from '../../services/token-service'
import MemeContext from '../../context/MemeContext'
import './NavBar.css'
//<FontAwesomeIcon icon='trash-alt' size='lg'/>
export default class NavBar extends React.Component {

  static defaultProps = {
    handleUserView: () => { }
  }

  state = {
    count: 0,
    user: []
  }

  static contextType = MemeContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  handleUsernameClick = () => {
    this.props.handleUserView()
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
          <div className='nav'>
          <h1 className='home-link'>
            {TokenService.hasAuthToken()
              ? <Link to='/dashboard'>  Memestagram </Link>
              : <Link to='/'> Memestagram </Link>
            }
          </h1>



        <div className='end'>
        <Link to='/addPost'><FontAwesomeIcon icon='plus' size='lg' className='icon1'/><span  className='icon2'>Add Post</span></Link>
        <Link to='/setting'><FontAwesomeIcon icon='cog' size='lg' className='icon1'/><span  className='icon2'>Edit</span></Link>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()
          }

          {TokenService.hasAuthToken()
            ? <Link to={`/users/${this.context.user.id}`} onClick={this.handleUsernameClick}> <div className='image-cropper'> <img src={this.context.user.userImg} alt='user' className='nav-bar-user-image'></img> </div> </Link>
            : <Link to='/login'> <div className='nav-bar-no-image'></div> </Link>
          }
          </div>
          </div>
        </nav>
      </header>
    )
  }
}