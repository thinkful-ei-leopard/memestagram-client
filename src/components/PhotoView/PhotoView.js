import React, { Component } from 'react'
import './PhotoView.css'
import { Input, Label } from '../Form/Form'
import Button from '../Button/Button'


export default class PhotoView extends Component {
    render() {
        return (
            <div>
               <div className='MemePost'>Mmem post</div>
               <div>Username</div>
                <div>Description</div>
                <div>Other's commnet</div>
                <div className='postComment'>
                <Label htmlFor='newComment'></Label>
                <Input type='text' name='newComment' id='newComment' placeholder=' Add commnet ...' ></Input>
                <Button id='post'>Post</Button>
                </div>    
            </div>
        )
    }
}
