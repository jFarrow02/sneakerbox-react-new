import React from 'react';
import './Image.scss';
import PropTypes from 'prop-types';
// import img from '../../images/tn_images/sneakers-005-tn.png';

const Image = props=>{
    const {alt, baseUrl, height, isLink, linkUrl, src, imgSrc, title, width,} = props;
    const anchor = isLink ? <a href={linkUrl}></a> : null;
    return(
        <img
            alt={alt}
            height={height}
            //src={img}
            src={require(`../../images/tn_images/${imgSrc}`)}
            title={title}
            width={width}
        >
            {anchor}
        </img>
    )
}

export default Image;

Image.propTypes = {
    alt: PropTypes.string,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isLink: PropTypes.bool,
    linkUrl: PropTypes.string,
    src: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Image.defaultProps = {
    alt: '',
    height: '',
    isLink: false,
    linkUrl: '',
    src: '',
    title: '',
    width: '',
}