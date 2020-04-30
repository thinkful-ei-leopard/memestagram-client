import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import MemeContext from '../../context/MemeContext'
import PostsService from '../../services/posts-service'

export default class DashboardPage extends Component {
   static defaultProps={
    handlePhotoView:()=>{ }
   } 
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

   handleClicked=()=>{
    this.props.handlePhotoView()
   }

   
    
   renderPosts() {
        const posts = this.state.posts

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
                            <p className='username'>{posts[i].username}</p>
                        </div>
                        <Link to={`/posts/${posts[i].id}`}>
                            <img src={posts[i].memeImg} alt='meme' className='meme'  onClick={(e) => this.handleClicked(e)} ></img>
                        </Link>
                        <div className='post-content'>
                            <span role='img' aria-label='heart' onClick={() =>this.addLike()} className='heart'>{this.state.like}</span>likes: {posts[i].likes}
                            <span>comments: 123</span>
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
}