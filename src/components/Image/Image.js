import React from 'react';
import './Image.scss';
import PropTypes from 'prop-types';


const Image = props=>{
    const {alt, height, isLink, linkUrl, src, title, width,} = props;
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