import React, { Component } from 'react'
import './PhotoView.css'
import { Input, Label } from '../Form/Form'
import Button from '../Button/Button'
import CommentsService from '../../services/comment-service'
import PostsService from '../../services/posts-service'
import MemeContext from '../../context/MemeContext'
import Comment from './Comment';

export default class PhotoView extends Component {
state={
    error:null,
    singlePost:'',
    comments:[],
    newComment:null
}
static contextType = MemeContext

componentDidMount(){
    this.context.clearError()
    PostsService.getOnePost()
        .then(res => this.setState({singlePosts: res}))
        .catch(this.context.setError)
    CommentsService.getComment()
        .then(res => this.setState({comments: res}))
        .catch(this.context.setError)   
}

addComment(event){
   event.preventDefault();
   const {newComment}=event.target
   CommentsService.postComment({
    newComment:newComment.value
    })
    .then(data =>{
        newComment.value=' '
    })
    .catch(res =>{
        this.setState({
            error:JSON.stringify(res.error)
        })
    })

   }

    render() {
        const {singlePost, comments}=this.state
        return (
            <div>
                <div className='MemePost'>{singlePost.memeInng}</div>
                <h3>{singlePost.username}</h3>
                <p>{singlePost.description}</p>
                <Comment comments={comments}/>
                <form onSubmit={this.addComment}>
                <div className='postComment'>
                <Label htmlFor='newComment'></Label>
                <Input type='text' name='newComment' id='newComment' placeholder=' Add commnet ...' required></Input>
                <Button type='submit' id='post' >Post</Button>
                </div> 
                </form>   
            </div>
        )
    }
}
