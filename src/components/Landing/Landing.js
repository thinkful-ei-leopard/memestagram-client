import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

export default class Landing extends Component {
    render() {
        return (
        <div>
            <div className='title-card'>
                <h3>Memestagram</h3>
                <p>A meme only platform for users to post, comment, and like memes!</p>
            </div>

            <div className='login landbtn'>
                <Link to='/login'>Login</Link>
            </div>

            <div className='register landbtn'>
                <Link to='/register'>Register</Link>
            </div>
        </div>
        )
    }
}
