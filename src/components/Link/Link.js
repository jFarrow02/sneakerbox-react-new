import React from 'react';
import './Link.scss';
import PropTypes from 'prop-types';

const Link = props=>{

    const target = props.newWindow ? '_blank' : '_self';
    return(
        <a
            aria-label={props.linkDescription}
            onClick={props.clickHandler}
            href={props.url}
            target={target}
        >
            {props.children}
        </a>
    )
}

export default Link;

Link.propTypes = {
    clickHandler: PropTypes.func,
    hoverHandler: PropTypes.func,
    linkDescription: PropTypes.string,
    newWindow: PropTypes.bool,
    url: PropTypes.string,
}

Link.defaultProps ={
    clickHandler: null,
    hoverHandler: null,
    linkDescription: '',
    newWindow: false,
    url: '#',
}