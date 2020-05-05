/*import React, { Component } from 'react'
import Buttons from './Upload-Button'
import Spinner from '../Image-Upload/Spinner'
import Images from '../Image-Upload/Images'
import API_ENDPOINT from '../../config'
import './ImageUpload.css'

export default class Image_Upload extends Component {
  
    state = {
      uploading: false,
      images: []
    }
  
    onChange = e => {
      const files = Array.from(e.target.files)
      this.setState({ uploading: true })
  
      const formData = new FormData()
  
      files.forEach((file, i) => {
        formData.append(i, file)
      })
  
      fetch(`http://localhost:8000/api/image-upload`, {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(images => {
        console.log(images)
        this.setState({ 
          uploading: false,
          images
        })
      })
    }
  
    removeImage = id => {
      this.setState({
        images: this.state.images.filter(image => image.public_id !== id)
      })
    }

    
    render() {
      const { uploading, images } = this.state
      const content = () => {
        switch(true) {
          case uploading:
            return <Spinner />
          case images.length > 0:
            return <Images images={images} removeImage={this.removeImage} />
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
  }*/