import config from '../config'
import TokenService from './token-service'

const PostsService = {
  getPosts() {
    return fetch(`${config.API_ENDPOINT}/posts`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res =>
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
  },
  postMeme(description, memeImg, user_id){
    return fetch(`${config.API_ENDPOINT}/posts`, {
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({ 
        description: description,
          memeImg: memeImg,
          user_id: user_id
        }), 
    })
    .then(res =>
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
    )
   
    },

  getOnePost(postId){
    return fetch(`${config.API_ENDPOINT}/posts/${postId}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res =>
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
  },
  getUserPosts(userId) {
    return fetch(`${config.API_ENDPOINT}/posts/users/${userId}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res =>
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
  },
  addLike(id, likes) {
    return fetch(`${config.API_ENDPOINT}/posts`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        likes: likes
      })
    })
      .then(res => 
        (!res.ok)
          ? res.then(e => Promise.reject(e))
          : res
      )
  },
  deletePost(id) {
    return fetch(`${config.API_ENDPOINT}/posts`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        id: id
      }),
    })
      .then(res => 
        (!res.ok)
        ? res.then(e => Promise.reject(e))
        : res 
      )
  }
}

export default PostsService