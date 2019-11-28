import React from 'react';
import './Home.scss';
import {
    CaptionedImage,
    Image,
} from '../index';
import propTypes from 'prop-types';
import mainImg from '../../images/sneakers-railtracks.jpg';

const Home = (props)=>{
    /**
     * TODO: 2019-11-28 12:24 EST 
     * LOOK TO REFACTOR caption CONTENT INTO SEPARATE CONFIG FILE
     * AND IMPORT DYNAMICALLY
     */
    const caption = <div className='Home--caption'>
            <h2>Winter Mode</h2>
            <p>Get ready for rugged adventures with our new <strong>Winter Collection.</strong></p>
            <a
                href='#'
            >&gt;&gt;Shop Now.</a>
    </div>;
    const captionStyles={
        position: 'absolute',
        top: '15px',
        left: '15px',
    };

    return(
        <section className='Home'>
            <CaptionedImage
                caption={caption}
                captionStyles={captionStyles}
            >
                <Image
                    alt='Main image home page; man walking along railway'
                    src={mainImg}
                />
            </CaptionedImage>
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