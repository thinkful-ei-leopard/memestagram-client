import React, { Component } from 'react'
import TokenService from '../services/token-service'

const MemeContext = React.createContext({
  user: {},
  posts: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setUser: () => {},
  setComments:()=>{},
  setPosts: () => {},
  processLogin: () => {},
  processLogout: () => {},
})

export default MemeContext

export class MemeProvider extends Component {
  constructor(props) {
    super(props)
    const state = { user: {}, error: null }

    const jwtPayload = TokenService.parseAuthToken()

    if (jwtPayload)
      state.user = {
        id: jwtPayload.user_id,
        name: jwtPayload.name,
        username: jwtPayload.sub,
        userImg: jwtPayload.userImg
      }

    this.state = state;
  }

  componentWillUnmount() {
    TokenService.clearCallbackBeforeExpiry()
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setUser = user => {
    this.setState({ user })
  }

  setPosts = posts => {
    this.setState({ posts })
  }


  processLogin = authToken => {
    TokenService.saveAuthToken(authToken)
    const jwtPayload = TokenService.parseAuthToken()
    this.setUser({
      id: jwtPayload.user_id,
      name: jwtPayload.name,
      username: jwtPayload.sub,
      userImg: jwtPayload.userImg
    })
  }

  processLogout = () => {
    TokenService.clearAuthToken()
    this.setUser({})
  }

  render() {
    const value = {
      user: this.state.user,
      posts: this.state.posts,
      error: this.state.error,
      setError: this.setError,
      setPosts: this.setPosts,
      clearError: this.clearError,
      setUser: this.setUser,
      processLogin: this.processLogin,
      processLogout: this.processLogout,
    }
    return (
      <MemeContext.Provider value={value}>
        {this.props.children}
      </MemeContext.Provider>
    )
  }
}

