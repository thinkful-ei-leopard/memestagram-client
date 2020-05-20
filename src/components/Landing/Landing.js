import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Landing.css';

export default class Landing extends Component {
    render() {
        return (
        <div>
            <h1 className='appname'>Memestagram</h1>
            <div className='title-card'>
                <div className='introduction'>
                <p className='slogan'>Where I can share Memes? <span className='meme'>Memestagram!</span></p>
                <div>
                <p className='des'>A meme only social platform for users to post, comment, and like memes!</p>
          <h3>How to use it</h3>
        </div>
        <ul className='instruction'>
          <li>
             As a new user, please register an account. If you have an account please login.
          </li>
          <li>
          After logging in, you can see other users' posts
          </li>
          <li>
          Click on a username to see more memes from the user
          </li>
          <li>
          Click on a comment or image to see comments and you can also add a comment.
          </li>
          <li>
          Click a heart to add likes to that post
          </li>
          <li>
          Click on Add Post (<FontAwesomeIcon icon='plus'/>)  to create a new post
          </li>
          <li>
          Click on Edit (<FontAwesomeIcon icon='cog'/>) to update username
          </li>
          <li>
          Click on the trash can to delete your post
          </li>
        </ul>
          <p>If you'd like to try this app, log in with our demo user account </p>
          <p>username: Demo</p>
          <p>password: Demopass123!</p>
                
                
            <div className='login landbtn'>
            
                <Link to='/login'>Login</Link>

            </div>

            <div className='register landbtn'>
                <Link to='/register'>Register</Link>
            </div>
            </div>
            </div>
        </div>
        )
    }
}
