import React from 'react';
import './CaptionedImage.scss';

import propTypes from 'prop-types';

const CaptionedImage = props=>{

    return(
        <div className='CaptionedImage'>
            <div 
                className='CaptionedImage--caption'
                style={{...props.captionStyles}}
            >
                {props.caption}
            </div>
            {props.children}
        </div>
    )
}

export default CaptionedImage;

CaptionedImage.propTypes = {
    caption: propTypes.oneOfType(
        [
            propTypes.element,
            propTypes.string,
        ]
    ),
    captionStyles: propTypes.object,
};

CaptionedImage.defaultProps = {
    caption: '',
    captionStyles: {},
}