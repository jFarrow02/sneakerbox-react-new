import React from 'react';
import './Home.scss';
import propTypes from 'prop-types';

const Home = (props)=>{

    return(
        <section>
            <h2>{props.title}</h2>
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