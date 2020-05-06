import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { Input, Label } from '../Form/Form'

export default props => 
  <div className='buttons fadein'>
    <div className='button'>
      <Label htmlFor='single' aria-label="insert">
        <FontAwesomeIcon icon={faImage} color='#3B5998' size='10x' />
      </Label>
      <Input type='file' id='single' onChange={props.onChange} /> 
    </div>
    </div>
    
     