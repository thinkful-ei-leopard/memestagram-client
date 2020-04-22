import config from '../../config'
// import TokenService from './token-service'

const PostsService = {
  getPosts() {
    return fetch(`${config.API_ENDPOINT}/posts`)
      .then(res =>
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
        )
  }
}

export default PostsService