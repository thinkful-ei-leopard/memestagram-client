/*import React, { Component } from 'react'
import Buttons from '../Image-Upload/Upload-Button'
import Spinner from '../Image-Upload/Spinner'
import Images from '../Image-Upload/Images'


export default class AddMemes extends Component {
  
    state = {
      uploading: false,
      memes: [],
      memesUrl:null
    }
  
    onChange = e => {
      console.log(e.target.url)
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
         memesUrl:memes[0].url
        })
        console.log(memes)
      })
    }
  
    removeImage = id => {
      this.setState({
        memes: this.state.memes.filter(image => image.public_id !== id)
      })
    }
    
    render() {
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
            <p>{this.state.memesUrl}</p>
          </div>
        </div>
      )
    }
  }*/