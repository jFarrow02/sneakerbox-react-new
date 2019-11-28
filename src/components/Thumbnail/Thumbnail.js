import React from 'react';
import './Thumbnail.scss';
import propTypes from 'prop-types';

const Thumbnail = props=>{

    return(
        <div className='Thumbnail'>
            {props.model.modelName}
        </div>
    )
}

export default Thumbnail;