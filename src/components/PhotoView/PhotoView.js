import React, { Component } from 'react';
import './PhotoView.css';
import NavBar from '../NavBar/NavBar';
import CommentsService from '../../services/comment-service';
import PostsService from '../../services/posts-service';
import MemeContext from '../../context/MemeContext';
import { Input, Label } from '../Form/Form';
import Button from '../Button/Button';
import Comments from './Comments';

export default class PhotoView extends Component {
static defaultProps={
   
    history:{
        push:()=>{}
    }
}  
state={
    error:null,
    singlePost:'',
    comments:[],
    newComment:null
}
static contextType = MemeContext

componentDidMount(){
  const{postId }=this.props.match.params
    this.context.clearError()
    PostsService.getOnePost(postId)
        .then(res => this.setState({singlePost:res}))
        .catch(this.context.setError)
    CommentsService.getComment(postId)
        .then(res => this.setState({comments:res}))
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

   renderComments(){
    const comments= this.state.comments;
    const commentsArr=[];
        for(let i = 0; i < comments.length; i++) {
            commentsArr.push(
                <Comments key={comments[i].id} user={comments[i].username} comment={comments[i].comment}/>
            )
        }
    

    return commentsArr
}

    render() {
        const {singlePost, comments}=this.state
        
        return (
            <div>
                <NavBar />
                <div className='memePost'>
                    <img src={singlePost.memeImg} alt='meme' className='meme' />
                </div>
                <div className='image-cropper single'>
                <img src={singlePost.userImg} alt='meme' className='user-img' />
                </div>
                <h3 className='user_name'>{singlePost.username}</h3>
                <p className='user_name'>{singlePost.description}</p> 
                <p>Total Comments: {comments.length}</p>
                <div>{this.renderComments()}</div> 
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
