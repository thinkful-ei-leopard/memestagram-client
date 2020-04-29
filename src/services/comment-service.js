import config from '../config'
import TokenService from './token-service';

const CommentsService = {
  getComment(){
    return fetch(`${config.API_ENDPOINT}/comments`, {
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
   postComment(comment) {
      return fetch(`${config.API_ENDPOINT}/comments`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'authorization': `bearer ${TokenService.getAuthToken()}`
        },
        body:JSON.stringify(
          comment
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