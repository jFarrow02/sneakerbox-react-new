import React from 'react';
import './Banner.scss';
import {
    Cart,
} from '../index';

/**
 * 
 * This component renders a header component to be displayed at the top of each application page. It also contains
 * a Cart component to display the user's shooping cart.
 */
const Banner = props=>{

    return(
        <header className='Banner'>
            <h1>{props.title}</h1>
                <Cart/>
        </header>
    )
}

export default Banner;