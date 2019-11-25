import React from 'react';
import './Nav.scss';
import {Link} from 'react-router-dom';
import {linkConfig} from '../../data/config';

const Nav = ()=>{

    return(
        <nav className='Nav'>
            Nav goes here
            {
                linkConfig.map((conf, idx)=>{
                    return(
                        <Link key={`nav-${idx}`} to={conf.url}>{conf.text}</Link>
                    );
                })
            }
        </nav>
    );
};

export default Nav;