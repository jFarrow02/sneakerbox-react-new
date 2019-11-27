import React from 'react';
import './Home.scss';
import {
    Image,
} from '../index';
import propTypes from 'prop-types';
import mainImg from '../../images/sneakers-railtracks.jpg';

const Home = (props)=>{

    return(
        <section className='Home'>
            <Image
                alt='Main image home page; man walking along railway'
                src={mainImg}
            />
        </section>
    );
};

export default Home;

Home.propTypes = {
    title: propTypes.string,
};

Home.defaultProps = {
    title: 'Home',
};