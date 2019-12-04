import React from 'react';
import './CaptionedImage.scss';

import propTypes from 'prop-types';

/**
 * The CaptionedImage component renders a relatively-positioned container div.
 * It renders any children along with a caption. The position and style of the caption
 * are configurable via the 'captionStyles' prop.
 */
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
    //@prop caption {String | element} Image caption text to display
    caption: propTypes.oneOfType(
        [
            propTypes.element,
            propTypes.string,
        ]
    ),
    //@prop captionStyles {Object} Style object for caption container <div>
    captionStyles: propTypes.object,
    //@prop children {element | node}
    children: propTypes.oneOfType(
        [
            propTypes.element,
            propTypes.node,
        ]
    )
};

CaptionedImage.defaultProps = {
    caption: '',
    captionStyles: {},
    children: null,
}