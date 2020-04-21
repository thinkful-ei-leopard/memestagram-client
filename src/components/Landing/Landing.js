import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

export default class Landing extends Component {
    render() {
        return (
        <div>
            <h3>Lest's start Meme !! </h3>
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
