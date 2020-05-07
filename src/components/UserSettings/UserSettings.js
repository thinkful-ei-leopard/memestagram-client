import React, { Component } from 'react'
import Navbar from '../NavBar/NavBar'

export default class UserSetting extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            submit: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        this.setState({
          input: event.target.value
        });
      }
      handleSubmit(event) {
    
    this.setState({
      submit:this.state.input
    })
    event.preventDefault()
      }
    
    render() {
        return (
            <div>
                <Navbar />
              <form onSubmit={this.handleSubmit}> 
              <h3>Change Name</h3>
              <input value={this.props.input} onChange={this.handleChange}></input>
                <button type='submit'>Update!</button>
              </form>
            <h4>New Name: {this.state.submit}</h4>    
            </div>
          );
        }
      };

