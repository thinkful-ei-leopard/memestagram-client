import config from '../config'
// import TokenService from './token-service'

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

  getUserPosts(userId){
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
  }
}

export default PostsService