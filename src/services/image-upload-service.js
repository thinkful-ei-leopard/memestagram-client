import config from '../config'

const ImageUploadService = {
  postProfileImage(formData) {
    return fetch(`${config.API_ENDPOINT}/imageupload`, {
      method: 'POST',
      body: formData 
    })
      .then(res => res.json())
      .then(image => {
        this.context.setUserImage(image)
      })
  }
}

export default ImageUploadService