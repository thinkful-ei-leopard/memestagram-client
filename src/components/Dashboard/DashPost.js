import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import MemeContext from '../../context/MemeContext'
import PostService from '../../services/posts-service'

export default class DashboardPage extends Component {
    state = {
        count: 0,
        comment: 0,
        like: '🤍'
    }

    static contextType = MemeContext

    componentDidMount(){
        PostService.getPosts()
            .then(this.context.setPosts)
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
    
   //!don't know what posts objects will look like exactly
   //is there a comment counter? if not think of a way to count the # of comments
   renderPosts() {
        const posts = this.context.posts

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
                        <img src={posts.userImg} alt='user'></img>
                        <p>{posts.username}</p>
                        <Link to='/photo'>
                            <img src={posts.photo} alt='meme'></img>
                        </Link>
                        <div>
                            <span role='img' aria-label='heart' onClick={() =>this.addLike()}>{posts.like}</span>like: {posts.count}
                            <span>comments: 123</span>
                            <p>comments</p>
                        </div>
                        <button >Comment</button>
                    </div>
                )
            }
        }
   }
    
    render() {
        
        return (
            <div>
                {this.renderPosts()}
            </div>
        )
    }
}