import React from 'react';
import './Banner.scss';

const Banner = (props)=>{

    return(
        <div className='Banner'>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Banner;