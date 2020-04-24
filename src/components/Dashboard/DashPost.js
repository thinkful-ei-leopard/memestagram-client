import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import MemeContext from '../../context/MemeContext'
import PostsService from '../../services/posts-service'

export default class DashboardPage extends Component {
    state = {
        count: 0,
        posts: [],
        like: '🤍'
    }

    static contextType = MemeContext

    componentDidMount(){
        this.context.clearError()
        PostsService.getPosts()
            .then(res => this.setState({posts: res}))
            .catch(this.context.setError)
    }

    //!need to post a like eventually
    addLike() {
    if(this.state.like === '🤍'){
     this.setState({
         like: '❤️',
         count: this.state.count + 1
     }) 
    } else if(this.state.like === '❤️'){
        this.setState({
            like: '🤍',
            count: this.state.count - 1
        })   
    }
   }
    
   renderPosts() {
        const posts = this.state.posts

        const postsArr = []
        if(!Array.isArray(posts) || !posts.length) {
            postsArr.push(
                <div className='no-posts'>
                    <h2 className='no-posts-message'>No memes yet!</h2>
                </div>
            )
        } else {
            for(let i = 0; i < posts.length; i++) {
                postsArr.push(
                    <div className='posts'>  
                        {/* <img src={posts.userImg} alt='user'></img> */}
                        <p>username</p>
                        <Link to='/photo'>
                            <img src={posts[i].memeImg} alt='meme'></img>
                        </Link>
                        <div className='post-content'>
                            <span role='img' aria-label='heart' onClick={() =>this.addLike()}>{this.state.like}</span>likes: {posts[i].likes}
                            <span>comments: 123</span>
                            <p>Username</p><p>{posts[i].description}</p>
                        </div>
                        <Link to='/photo'>Comment</Link>
                    </div>
                )
            }
        }

        return postsArr
   }
    
    render() {
        
        return (
            <div>
                {this.renderPosts()}
            </div>
        )
    }
}