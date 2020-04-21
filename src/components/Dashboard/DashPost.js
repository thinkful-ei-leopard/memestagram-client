import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class DashboardPage extends Component {
    state={
        count:0,
        comment:0,
        like:'🤍'
    }

    addLike(){
    
    if(this.state.like==='🤍'){
     this.setState({
         like:'❤️',
         count:this.state.count+1
     })
        
    }else if(this.state.like==='❤️'){
        this.setState({
            like:'🤍',
            count:this.state.count-1
        })
        
    }
    
   }
       
    
    render() {
        
        return (
            <div>
                <div className='profImg'>Image</div><Link to='/photo'>Username</Link>
                <div className='MemePost'>Mmem post</div>
                 <div ><span role='img' aria-label='heart' onClick={() =>this.addLike()}>{this.state.like}</span>like: {this.state.count}<span> Comment: {this.state.comment} </span></div>
                <button >Comment</button>
            </div>
        )
    }
}