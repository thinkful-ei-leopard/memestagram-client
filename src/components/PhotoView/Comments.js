import React, { Component } from 'react'

export default class Comments extends Component {
    render() {
        return (
            <div className='comments' >             
                    <p className='comment'><span className='user'>{this.props.user}</span> {this.props.comment}</p>        
            </div>
        )
    }
}
