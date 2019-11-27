import React from 'react';
import './Home.scss';
import propTypes from 'prop-types';
import mainImg from '../../images/sneakers-railtracks.jpg';

const Home = (props)=>{

    return(
        <section className='Home'>
            <img src={mainImg} alt='Main image'></img>
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