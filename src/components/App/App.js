import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../Utils/PrivateRoute';
import PublicOnlyRoute from '../../Utils/PublicOnlyRoute';
import Landing from '../Landing/Landing';
import DashboardPage from '../Dashboard/DashboardPage';
import PhotoView from '../PhotoView/PhotoView';
import SignUp from '../../routes/SignUpRoute/SignUpRoute';
import Login from '../../routes/LoginRoute/LoginRoute';
import AddPost from '../AddPost/AddPost';
import UserPage from '../UserPage/UserPage';
import NotFound from '../NotFound/NotFound';

import './App.css';
export default class App extends Component {
  render() {
    return (
      <main className="App">
        <Switch>
          <PublicOnlyRoute exact path='/' component={Landing}/>
          <PrivateRoute exact path='/dashboard' component={DashboardPage}/>
          <PrivateRoute path='/posts/:postId' component={PhotoView}/>
          <PublicOnlyRoute path='/login' component={Login}/>
          <PublicOnlyRoute path='/register' component={SignUp}/>
          <PrivateRoute path='/addPost'component={AddPost}/>
          <PrivateRoute path='/users/:userId' component={UserPage} />
          <Route component={NotFound}/>
        </Switch>
      </main>
    )
  }
}
