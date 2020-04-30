import React, { Component } from 'react'
import DashPost from './DashPost'
import NavBar from '../NavBar/NavBar'
import MemeContext from '../../context/MemeContext'
import PostsService from '../../services/posts-service'


import './Dashboard.css'

export default class DashboardPage extends Component {
    state = {
       posts: [],
       error: null
    }

    static contextType = MemeContext

    componentDidMount(){
        this.context.clearError()
        PostsService.getPosts()
            .then(res => this.setState({posts: res}))
            .catch(this.context.setError)
    } 

    renderPosts() {
        const { posts = [] } = this.state

        return posts.map(post => 
            <DashPost
            key={post.id}
            post={post}
            />
        )
    }

    render() {
        const { error } = this.state
        return (
            <div>
                <NavBar />
                {error
                    ? <p>There was an error, please try again</p>
                    : this.renderPosts()
                }
            </div>
        )
    }
}
