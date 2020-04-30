import React, { Component } from 'react'
import DashPost from './DashPost'
import NavBar from '../NavBar/NavBar'
import './Dashboard.css'

export default class DashboardPage extends Component {
   
    
    render() {
        return (
            <div>
                <NavBar />
                <DashPost />
            </div>
        )
    }
}
