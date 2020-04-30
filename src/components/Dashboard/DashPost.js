<<<<<<< HEAD
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import MemeContext from '../../context/MemeContext'
import PostsService from '../../services/posts-service'
import CommentsService from '../../services/comment-service';
export default class DashboardPage extends Component {
   static defaultProps={
    handlePhotoView:()=>{ }
   } 
      state = {      
        count: 0,
        posts: [],
        like: '🤍',
        comments:[]
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


   handleClicked=()=>{
    this.props.handlePhotoView()
   }
    
   renderPosts() {
        const posts = this.state.posts
        const comments = this.state.comments
        const postsArr = []
        if(!Array.isArray(posts) || !posts.length) {
            postsArr.push(
                <div key={posts} className='no-posts'>
                    <h2 className='no-posts-message'>No memes yet!</h2>
                </div>
            )
        } else {
            for(let i = 0; i < posts.length; i++) {
                postsArr.push(
                   
                    <div  key={posts[i].id} className='posts'>  
                        <div className='upper-container'>
                            <div className='image-cropper'>
                                <img src={posts[i].userImg} alt='user' className='user-img'></img>
                            </div>
                            <Link to={`/users/${posts[i].user_id}`}>
                                <p className='username' >{posts[i].username}</p>
                            </Link>
                        </div>
                        <Link to={`/posts/${posts[i].id}`}>
                            <img src={posts[i].memeImg} alt='meme' className='meme'  onClick={(e) => this.handleClicked(e)} ></img>
                        </Link>
                        <div className='post-content'>
                            <span role='img' aria-label='heart' onClick={() =>this.addLike()} className='heart'>{this.state.like}</span>likes:{posts[i].likes}
                            <span>comments: </span>
                            <div className='description-contianer'>
                                <p className='username'>{posts[i].username}</p>
                                <p className='description'>{posts[i].description}</p>
                            </div>
                        </div>
                        <Link to={`/posts/${posts[i].id}`}>Comment</Link>
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
=======
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import MemeContext from '../../context/MemeContext'
import PostsService from '../../services/posts-service'

export default class DashPost extends Component {


   static defaultProps={
    handlePhotoView:()=>{ }
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
handleClicked=()=>{
    this.props.handlePhotoView()
   }


   renderPost() {
        const { post } = this.props
    
        return (
            <div className='post'>  
                <div className='upper-container'>
                    <div className='image-cropper'>
                        <img src={post.userImg} alt='user' className='user-img'></img>
                    </div>
                    <Link to={`/users/${post.user_id}`}>
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
>>>>>>> 1cbd0c54dc0cecbbd708a19796d6fe1e076931a1
}