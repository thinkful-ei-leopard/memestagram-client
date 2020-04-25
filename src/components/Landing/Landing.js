import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import loginmeme from './image/log.png';
import regmeme from './image/reg.png';
import './Landing.css';

export default class Landing extends Component {
    render() {
        return (
        <div>
            <div className='title-card'>
                <div className='introduction'>
                <p className='slogan'>Where I can share Memes? <span className='meme'>Memestagram!</span></p>
                <p className='des'>A meme only platform for users to post, comment, and like memes!</p>
                
            <div className='login landbtn'>
            
                <Link to='/login'><div className='log memes'><img src={loginmeme} alt='login meme'/></div>Login</Link>

            </div>

            <div className='register landbtn'>
                <Link to='/register'><div className='reg memes'><img src={regmeme} alt='reg meme'/></div>Register</Link>
            </div>
            </div>
            </div>
        </div>
        )
    }
}
