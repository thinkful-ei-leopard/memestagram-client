import React, { Component } from 'react'
import DashPost from './DashPost'
import NavBar from '../NavBar/NavBar'
import './Dashboard.css'

export default class DashboardPage extends Component {
    static defaultProps = {
        history: {
            push: () => { }
        },
        match:{
            params:{}
        },
    }
    

    handlePhotoView = () => {
       
      const { postId } = this.props.match.params
        
        const { history } = this.props
        history.push(`/posts/${postId} `)
        
    }
    render() {
        return (
            <div>
                <NavBar />
                <DashPost  handlePhotoView={this.handlePhotoView}/>
            </div>
        )
    }
}
