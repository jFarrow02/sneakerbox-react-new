import React from 'react';
import './Image.scss';
import PropTypes from 'prop-types';
// import img from '../../images/tn_images/sneakers-005-tn.png';

const Image = props=>{
    const {alt, height, isLink, linkUrl, src, title, width, isThumbnail, isTinyImg, dynamicImgSrc} = props;
    const anchor = isLink ? <a href={linkUrl}></a> : null;
   
    if(isThumbnail){
        return(
            <img
                alt={alt}
                height={height}
                src={require(`../../images/tn_images/${dynamicImgSrc}`)}
                title={title}
                width={width}
            >
                {anchor}
            </img>
        )
    }
    
    else if(isTinyImg){
        return(
            <img
                alt={alt}
                height={height}
                src={require(`../../images/tiny_images/${dynamicImgSrc}`)}
                title={title}
                width={width}
            >
                {anchor}
            </img>
        )
    }
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
    dynamicImgSrc: PropTypes.string,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isLink: PropTypes.bool,
    linkUrl: PropTypes.string,
    src: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Image.defaultProps = {
    alt: '',
    dynamicImgSrc: null,
    height: '',
    isLink: false,
    linkUrl: '',
    src: '',
    title: '',
    width: '',
}