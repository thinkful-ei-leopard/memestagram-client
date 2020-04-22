import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

//Renders when there are images to show
export default props => 
props.images.map((image, i) => 
    <div key={i} className='fadeIn'>
        <div
            onClick={() => props.removeImage(image.public_id)}
            className='delete'
            >
                <FontAwesomeIcon icon={faTimesCircle} size='2x' />
            </div>
            <img src={image.secure_url} alt='' />
    </div>
)