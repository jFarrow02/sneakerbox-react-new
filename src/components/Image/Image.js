import React from 'react';
import './Image.scss';
import PropTypes from 'prop-types';

const Image = props=>{
    const {alt, height, isLink, linkUrl, src, title, width, isThumbnail, isTinyImg, dynamicImgSrc} = props;
    const anchor = isLink ? <a href={linkUrl}></a> : null;
   
    if(isThumbnail){
        return(
            <img
                alt={alt}
                height={height}
                /**
                 * TODO: 2019-11-28 18:26 EST
                 * HOW CAN THE BASE FILE PATH BE PASSED AS A PROP
                 * AND USED IN require()? 
                 * 
                 * RETURNING DIFFERENT JSX CONDITIONALLY IS A WORKAROUND BASED ON https://stackoverflow.com/questions/45334874/load-images-based-on-dynamic-path-in-reactjs/45334965#45334965
                 */
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