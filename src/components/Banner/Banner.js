import React from 'react';
import './Banner.scss';
import {
    Cart,
} from '../index';

const Banner = (props)=>{

    return(
        <header className='Banner'>
            <h1>{props.title}</h1>
                <Cart/>
        </header>
    )
}

export default Banner;