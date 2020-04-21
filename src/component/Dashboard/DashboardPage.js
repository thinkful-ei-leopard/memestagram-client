import React, { Component } from 'react'
import DashPost from './DashPost';

export default class DashboardPage extends Component {
    state={
       posts:[]
    }
    render() {
        return (
            <div>
                <DashPost />
            </div>
        )
    }
}
