import React, { Component } from 'react'
import {Route, Switch } from 'react-router-dom';
import Landing from '../Landing/Landing';
import './App.css';
import DashboardPage from '../Dashboard/DashboardPage';
import PhotoView from '../PhotoView/PhotoView';
import SignUp from '../SignUp/SignUp';
import Login from '../../routes/LoginRoute/LoginRoute';

import AddPost from '../AddPost/AddPost';
import UserPage from '../UserPage/UserPage'


export default class App extends Component {
  render() {
    return (
      <main className="App">
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/dashboard' component={DashboardPage}/>
          <Route path='/posts/:postId' component={PhotoView}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={SignUp}/>
          <Route path='/addPost'component={AddPost}/>
          <Route path='/users/:userId' component={UserPage} />
        {/*<Route component={NotFound}/>*/}
        </Switch>
      </main>
    )
  }
}
