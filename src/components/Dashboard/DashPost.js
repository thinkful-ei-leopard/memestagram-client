import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import MemeContext from '../../context/MemeContext'
import PostsService from '../../services/posts-service'

export default class DashPost extends Component {


   static defaultProps = {
    handlePhotoView: () => { },
    handleUserView: () => { }
   }
    
   state = {         
        count: 0,
        posts: [],
        heart: '🤍',
        likes: this.props.post.likes
    }

    static contextType = MemeContext

    renderLike(heart = '🤍') {
        if(heart === '🤍') {
            return '🤍'
        } else if (heart === '❤️') {
            return '❤️'
        }
    }

    handleAddLike(post, e) {
    if(this.state.heart === '🤍'){
        const incLike = post.likes+1
        PostsService.addLike(post.id, post.likes + 1)
        this.setState({
            heart: '❤️',
            likes: incLike
        }) 
    } else if (this.state.heart === '❤️') {
        PostsService.addLike(post.id, post.likes)
        this.setState({
            heart: '🤍',
            likes: post.likes
        })   
    }
   }

    handleClicked = () => {
        this.props.handlePhotoView()
    }

    handleUsernameClick = () => {
        console.log('handleusername')
        this.props.handleUserView()
    }

   renderPost() {
        const { post } = this.props
    
        return (
            <div className='post'>  
                <div className='upper-container'>
                    <div className='image-cropper'>
                        <img src={post.userImg} alt='user' className='user-img'></img>
                    </div>
                    <Link to={`/users/${post.user_id}`} onClick={this.handleUsernameClick}>
                        <p className='username'>{post.username}</p>
                    </Link>
                </div>
                <Link to={`/post/${post.id}`}>
                    <img src={post.memeImg} alt='meme' className='meme'></img>
                </Link>
                <div className='post-content'>
                    <span role='img' aria-label='heart' onClick={(e) =>this.handleAddLike(post, e)} className='heart'>{this.state.heart}</span>
                    likes: {this.state.likes}
                    <span>comments: 123</span>
                    <div className='description-contianer'>
                        <p className='username'>{post.username}</p>
                        <p className='description'>{post.description}</p> 
                    </div>
                </div>
                <Link to='/photo'>Comment</Link>
            </div>
        ) 
    }
    
    render() {
        
        return (
            <div>
                {this.renderPost()}
            </div>
        )
    }
}