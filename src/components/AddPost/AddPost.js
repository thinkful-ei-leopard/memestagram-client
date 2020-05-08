import React, { Component } from 'react';
import {Label} from '../Form/Form';
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
          </div>
        )
      }
    
    render() {
        return (
            <div>
                <NavBar/>
                <div className='addpost'>
                <form onSubmit={(e)=>this.addPosts(e)}>
                <p className='upload'>Upload your Memes</p>
                {this.renderMeme()}
                <Label htmlFor='description' >Description</Label><br></br>
                <textarea placeholder='Describe more about Memes ... (no more than 150 characters)' type='text' id='description'  name='description' maxlength = "150"></textarea>
                <Button type='submit'>Submit</Button>
                </form>
                </div>
            </div>
        )
    }
}
