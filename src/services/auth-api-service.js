import config from '../config'

import TokenService from './token-service';

const AuthApiService = {
  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json, text/plain',
      },
      body: JSON.stringify({
        user
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  postLogin({ username, password }) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {

      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(err => Promise.reject(err))
          : res.json()
      )
      
  },

  updateUsername(id, newName){
    return fetch(`${config.API_ENDPOINT}/users/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json, text/plain',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        id:id,
        username:newName
      })
    })
    .then(res => 
      (!res.ok)
        ? res.then(e => Promise.reject(e))
        : res
    )
  }

  
}

export default AuthApiService