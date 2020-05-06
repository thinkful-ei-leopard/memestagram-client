import React from 'react'
import { Link } from 'react-router-dom'
import MemeContext from '../../context/MemeContext'
import PostsService from '../../services/posts-service'
import NavBar from '../NavBar/NavBar'

import './UserPage.css'

export default class UserPage extends React.Component {
  state = {
    posts: [],
    like: '🤍'
  }

  static contextType = MemeContext

  componentDidMount(){
    const{ userId }=this.props.match.params
    this.context.clearError()
    PostsService.getUserPosts(userId)
      .then(res => this.setState({posts: res}))
      .catch(this.context.setError)
  }

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

  renderUserInfo() {
    const posts = this.state.posts
    
    if(!Array.isArray(posts) || !posts.length){
      return <p>Loading...</p>
    } else {
      return (
        <div>
          <div className='image-cropper'>
            <img src={posts[0].userImg} alt='user' className='user-img'></img>
          </div>
            <p className='username'>{posts[0].username}</p>
        </div>
        )
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
          <div className='user-posts'>  
            <Link to={`/posts/${posts[i].id}`}>
              <img src={posts[i].memeImg} alt='meme' className='user-meme'></img>
            </Link>
          </div>
            )
        }
    }

    return postsArr
  }

render() {
  return (
    <div>
      <NavBar/>
      {this.renderUserInfo()}
      <div className='user-posts-container'>
        {this.renderPosts()}
      </div>
    </div>
  )
}
}