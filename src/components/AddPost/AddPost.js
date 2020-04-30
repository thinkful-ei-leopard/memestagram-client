import React, { Component } from 'react';
import {Label} from '../Form/Form';
import { Link }from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Button from '../Button/Button';
import './AddPost.css';
import AddMemes from './AddMemes';
import PostsService from '../../services/posts-service';

export default class AddPost extends Component {

    /*addPosts=(event)=>{
     event.preventDefault();
     const {description}=event.target
     
    }*/
    render() {
        return (
            <div>
                <NavBar/>
                <form onSubmit={this.addPosts}>
                <h3>Upload your Memes</h3>
                <AddMemes/>
                <Label htmlFor='description' >Description</Label><br></br>
                <textarea placeholder='Describe more about Memes' id='des' rows="4" cols="50" name='description'></textarea>
                <Link to={`/posts/post_id`}><Button type='submit'>Submit</Button></Link>
                </form>
            </div>
        )
    }
}
