import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

export default class Landing extends Component {
    render() {
        return (
        <div>
            <div className='title-card'>
                <div className='introduction'>
                <p className='slogan'>Where I can share Memes? <span className='meme'>Memestagram!</span></p>
                <p className='slogan'>Where I can find Memes?  <span className='meme'> Memestagram!</span></p>
                <p className='slogan'>Where I can store Memes?  <span className='meme'> Memestagram!</span></p>
                <p className='des'>A meme only platform for users to post, comment, and like memes!</p>
                
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
