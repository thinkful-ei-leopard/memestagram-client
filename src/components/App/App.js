import React, { Component } from 'react'
import {Route, Switch } from 'react-router-dom';
import Landing from '../Landing/Landing';
import './App.css';
import DashboardPage from '../Dashboard/DashboardPage';
import PhotoView from '../PhotoView/PhotoView';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';

export default class App extends Component {
  render() {
    return (
      <main className="App">
     <header><h1>Memestagram</h1></header>
     <Switch>
     <Route exact path='/' component={Landing}/>
     <Route exact path='/dashboard' component={DashboardPage}/>
     <Route exact path='/photo' component={PhotoView}/>
     <Route path='/login' component={Login}/>
     <Route path='/register' component={SignUp}/>
     {/*<Route component={NotFound}/>*/}
     </Switch>
    </main>
    )
  }
}
