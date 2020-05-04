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
        likes: this.props.post.likes,
        delete: false
    }

    static contextType = MemeContext

    renderDelete(post, e){
        if(this.context.user.id === post.user_id){
            return <div  className='delete'> <span role='img' aria-label='delete' className='delete-emoji' onClick={e => this.handleDelete(post, e)}>🗑️</span> </div>
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
        await PostsService.getPosts()
            .then(res => this.setState({posts: res}))
            .catch(this.context.setError)
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
                    <div className='delete-container' >{this.renderDelete(post)}</div>
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