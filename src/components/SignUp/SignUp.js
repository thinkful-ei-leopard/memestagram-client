import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Required, Label } from '../Form/Form'
import AuthApiService from '../../services/auth-api-service'
import Button from '../Button/Button'
//import ImageUpload from '../Image-Upload/Image-Upload'
//import ImageUploadService from '../../services/image-upload-service'
import Spinner from '../Image-Upload/Spinner'
import Images from '../Image-Upload/Images'
import Buttons from '../Image-Upload/Upload-Button'


export default class SignUp extends Component { 
  static defaultProps = {
    onSignUpSuccess: () => { }
    }
   
firstInput = React.createRef()
    state = {
      uploading: false,
      images: [],
      error: null,
      userImg:null
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
          images,
          userImg:images[0].url
        })
      })
    }
  
    removeImage = id => {
      this.setState({
        images: this.state.images.filter(image => image.public_id !== id)
      })
    }

    

    handleSubmit = ev => {
        ev.preventDefault()
        const { name, username, password } = ev.target
        AuthApiService.postUser({
            name: name.value,
            username: username.value,
            password: password.value,
            userImg:this.state.userImg
          }) 
            .then(user => {
              name.value = ''
              username.value = ''
              password.value = ''
              this.setState({
                userImg:null
              })
              this.props.onSignUpSuccess()
            })
            .catch(res => {
              this.setState({ error: res.error })
            })
           
        }
      
        componentDidMount() {
          this.firstInput.current.focus()
        }

        renderUerImg() {
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

    render() {
       const { error } = this.state
        return (
        <form
        className='form'
        onSubmit={this.handleSubmit}
      >
        <div>
          {this.renderUerImg()}
        </div>
        <div role='alert'>
          {error && <p>{error}</p>}
        </div>
        <div>
          <Label htmlFor='registration-name-input'>
            Enter your name<Required />
          </Label>
          <Input
            ref={this.firstInput}
            id='registration-name-input'
            name='name'
            required
          />
        </div>
        <div>
          <Label htmlFor='registration-username-input'>
            Choose a username<Required />
          </Label>
          <Input
            id='registration-username-input'
            name='username'
            required
          />
        </div>
        <div>
          <Label htmlFor='registration-password-input'>
            Choose a password <Required /> 
          </Label>
          <Input
            id='registration-password-input'
            name='password'
            type='password'
            required
          />
        </div>
        <footer className='form-footer'>
          <Button type='submit' className='form-footer-button'>
            Sign up
            
          </Button>
          {' '}
          <Link to='/login' className='form-footer-link'>Already have an account?</Link>
        </footer>
      </form>            
        )
    }
}

