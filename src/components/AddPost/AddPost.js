import React, { Component } from 'react';
import {Label} from '../Form/Form';
import { Link }from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Button from '../Button/Button';
import './AddPost.css';
import Buttons from '../Image-Upload/Upload-Button'
import Spinner from '../Image-Upload/Spinner'
import Images from '../Image-Upload/Images'
import PostsService from '../../services/posts-service';
import MemeContext from '../../context/MemeContext';

export default class AddPost extends Component {
  
    state = {
        uploading: false,
        memes: [],
        memeImg:null
      }
      static contextType = MemeContext
async addPosts(event){
     event.preventDefault();
     const {description}=event.target
    await PostsService.postMeme(
         description.value, this.state.memeImg, this.context.user.id
     )
      .then(meme =>{
        this.setState({
            memeImg:null
        })
        description.value=' '
      })
      .catch(res =>{
        this.setState({
            error:JSON.stringify(res.error)
        })
    }
    
    )
  await  this.props.history.push('/dashboard')

  }

    
    
      onChange = e => {
        const files = Array.from(e.target.files)
        this.setState({ uploading: true })
    
        const formData = new FormData()
    
        files.forEach((file, i) => {
          formData.append(i, file)
        })
    
        fetch(`http://localhost:8000/api/meme-upload`, {
          method: 'POST',
          body: formData
        })
        .then(res => res.json())
        .then(memes => {
          this.setState({ 
            uploading: false,
            memes,
            memeImg:memes[0].url
          })
        })
      }
    
      removeImage = id => {
        this.setState({
          memes: this.state.memes.filter(image => image.public_id !== id)
        })
      }
      
      renderMeme() {
        const { uploading, memes } = this.state
    
        const content = () => {
          switch(true) {
            case uploading:
              return <Spinner />
            case memes.length > 0:
              return <Images images={memes} removeImage={this.removeImage} />
            default:
              return <Buttons onChange={this.onChange} />
          }
        }
    
        return (
          <div>
            <div className='buttons'>
              {content()}
            </div>
            <p>{this.state.memeImg}</p>
          </div>
        )
      }
    
    render() {
        return (
            <div>
                <NavBar/>
                <form onSubmit={(e)=>this.addPosts(e)}>
                <h3>Upload your Memes</h3>
                {this.renderMeme()}
                <Label htmlFor='description' >Description</Label><br></br>
                <textarea placeholder='Describe more about Memes' type='text' id='des' rows="4" cols="50" name='description'></textarea>
                <Button type='submit'>Submit</Button>
                </form>
            </div>
        )
    }
}
