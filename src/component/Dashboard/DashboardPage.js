import React, { Component } from 'react'

export default class DashboardPage extends Component {
    render() {
        return (
            <div>
                <div className='profImg'>Image</div><span>Username</span>
                <div className='MemePost'>Meme post</div>
                <span>❤️like: 420</span><span>Comment: 6 </span>
            </div>
        )
    }
}
