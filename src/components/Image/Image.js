import React from 'react';
import './Image.scss';
import propTypes from 'prop-types';


const Image = props=>{
    const {src, alt, width, height, isLink, linkUrl, title} = props;
    const anchor = isLink ? <a href={linkUrl}></a> : null;
    return(
        <img
            alt={alt}
            height={height}
            src={src}
            title={title}
            width={width}
        >
            {anchor}
        </img>
    )
}

export default Image;

Image.propTypes = {
    alt: propTypes.string,
    height: propTypes.oneOf([propTypes.string, propTypes.number]),
    isLink: propTypes.bool,
    linkUrl: propTypes.string,
    src: propTypes.string,
    title: propTypes.oneOf([propTypes.string, propTypes.number]),
    width: propTypes.oneOf([propTypes.string, propTypes.number]),
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