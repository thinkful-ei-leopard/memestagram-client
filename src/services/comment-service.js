import config from '../config'
import TokenService from './token-service';

const CommentsService = {
  getComment(postId){
    return fetch(`${config.API_ENDPOINT}/comments/${postId}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
  },
   postComment(comment, postId, userId) {
      return fetch(`${config.API_ENDPOINT}/comments/${postId}`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'authorization': `bearer ${TokenService.getAuthToken()}`
        },
        body:JSON.stringify(
         { comment,
          user_id:userId,
          posts_id:postId}
        ),
      })
        .then(res =>
          (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
        )
    }
  }
  
  export default CommentsService