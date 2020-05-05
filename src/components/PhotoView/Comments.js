import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Comments extends Component {
    render() {
        return (
            <div className='comments' >             
                    <p className='comment'><Link to={`/users/${this.props.user_id}`}> <span className='user'>{this.props.user}</span> </Link> {this.props.comment}</p>        
            </div>
        )
    }
}
