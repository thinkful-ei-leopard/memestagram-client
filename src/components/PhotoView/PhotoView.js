import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import CommentsService from '../../services/comment-service';
import PostsService from '../../services/posts-service';
import MemeContext from '../../context/MemeContext';
import { Input, Label } from '../Form/Form';
import Button from '../Button/Button';
import Comments from './Comments';

import './PhotoView.css';
export default class PhotoView extends Component {
    
    static defaultProps={
        history:{
            push:()=>{}
        },
        handleUserView: () => { }
    }  

    state = {
        postId: 0,
        error: null,
        singlePost: '',
        comments: [],
        newComment: null
    }

    static contextType = MemeContext

    componentDidMount(){
    const {postId }=this.props.match.params
    this.setState({postId: Number(postId)})
        this.context.clearError()
        PostsService.getOnePost(postId)
            .then(res => this.setState({singlePost:res}))
            .catch(this.context.setError)
        CommentsService.getComment(postId)
            .then(res => this.setState({comments:res}))
            .catch(this.context.setError)        
    }

    handleUsernameClick = () => {
        this.props.handleUserView()
    }

    async addComment(e){
        e.preventDefault();  
        const {newComment}=e.target

        await CommentsService.postComment(
        newComment.value,
        this.state.postId, this.context.user.id)
        .then(data =>{
            newComment.value=' '
        })
        .catch(res =>{
            this.setState({
                error:JSON.stringify(res.error)
            })
        })

        await  CommentsService.getComment(this.state.postId)
        .then(res => this.setState({comments:res}))
        .catch(this.context.setError) 
    }

    async handleDelete(postId, e) {
        e.preventDefault()
        await PostsService.deletePost(postId)
            .then(this.setState({delete: true}))
        await this.props.history.push('/dashboard');
    }

    renderComments(){
        const comments= this.state.comments;
        const commentsArr=[];
            for(let i = 0; i < comments.length; i++) {
                commentsArr.push(
                    <Comments key={comments[i].id} user={comments[i].username} user_id={comments[i].user_id} comment={comments[i].comment}/>
                )
            }
        

        return commentsArr
    }

    renderDeletePost(post) {
        if(post.user_id === this.context.user.id) {
            return <div  className='delete'> <span role='img' aria-label='delete' className='delete-emoji' onClick={e => { if (window.confirm('Are you sure you want to delete this meme?')) this.handleDelete(this.state.postId, e)}}>🗑️</span> </div>
        } else {
            return
        }
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
                <Link to={`/users/${this.state.singlePost.user_id}`} onClick={this.handleUsernameClick}> <h3 className='user_name'>{singlePost.username}</h3> </Link>
                <p className='user_name'>{singlePost.description}</p> 
                <p>Total Comments: {comments.length}</p>
                <div>{this.renderDeletePost(singlePost)}</div>
                <div>{this.renderComments()}</div> 
                <form onSubmit={(e)=>this.addComment(e)}>
                <div className='postComment'>
                <Label htmlFor='newComment'></Label>
                <Input type='text' name='newComment' id='newComment' placeholder=' Add comment ...' required></Input>
                <Button type='submit' id='post' >Post</Button>
                </div> 
                </form>           
            </div>
        )
    }
}
