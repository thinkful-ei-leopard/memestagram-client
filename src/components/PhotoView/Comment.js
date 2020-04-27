import React, { Component } from 'react'
import './PhotoView.css'


export default class Comment extends Component {
    render() {
        return (
            <div>
                <span>{this.props.comments.username}</span>
                <p>{this.props.comments.comment}</p>
            </div>
        )
    }
}
