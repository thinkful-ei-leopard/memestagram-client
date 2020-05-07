import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import MemeContext from '../../context/MemeContext'
import PostsService from '../../services/posts-service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Dashboard.css'

export default class DashPost extends Component {


   static defaultProps = {
    handlePhotoView: () => { },
    handleUserView: () => { }
   }
    
   state = {         
        count: 0,
        posts: [],
        heart: '🤍',
        likes: this.props.post.likes,
        delete: false
    }

    static contextType = MemeContext

    renderDelete(post, e){
        if(this.context.user.id === post.user_id){

            return <div  className='delete'> <span role='img' aria-label='delete' className='delete-emoji' onClick={e => {  if (window.confirm('Are you sure you want to delete this meme?')) this.handleDelete(post, e)}}><FontAwesomeIcon icon='trash-alt' size='lg'/></span> </div>
        } else {
            return
        }
    }

    handleAddLike(post, e) {
    if(this.state.heart === '🤍'){
        const incLike = post.likes+1
        PostsService.addLike(post.id, post.likes + 1)
            .catch(this.context.setError)
        this.setState({
            heart: '❤️',
            likes: incLike
        }) 
    } else if (this.state.heart === '❤️') {
        PostsService.addLike(post.id, post.likes)
            .catch(this.context.setError)
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
        this.props.handleUserView()
    }

    async handleDelete(post, e) {
        e.preventDefault()
        await PostsService.deletePost(post.id)
            .then(this.setState({delete: true}))
        await window.location.reload(false);
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
                <Link to={`/posts/${post.id}`}>
                    <img src={post.memeImg} alt='meme' className='meme'  onClick={(e) => this.handleClicked(e)}></img>
                </Link>
                <div className='post-content'>
                    <div className='unique'>
                    <span role='img' aria-label='heart' className='heart' onClick={(e) =>this.handleAddLike(post, e)} >{this.state.heart}
                    likes: {this.state.likes}</span>
                    <span className='delete-container' >{this.renderDelete(post)}</span>
                    </div>
                    <div className='description-contianer'>
                        <Link to={`/users/${post.user_id}`} onClick={this.handleUsernameClick}> 
                            <p className='username'>{post.username}</p> 
                        </Link>
                        <p className='description'>{post.description}</p> 
                    </div>
                </div>
                
                <Link to={`/posts/${post.id}`} className='toComment'>Comment</Link>
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