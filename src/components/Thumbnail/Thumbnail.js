import React from 'react';
import './Thumbnail.scss';
import {resolveComponentName} from '../../services/resolveComponentService';

/**
 * The Thumbnail component accepts a single prop, 'model', which should be an Object representing 
 * a record returned from the database. Thumbnail will examine the 'key' attribute on 'model', map the
 * model to its corresponding component using the resolveComponentService, and
 * dynamically create and render the correct child component(s).
 */

const Thumbnail = props=>{
    const {key} = props.model;
    const model = resolveComponentName(key, {...props.model, isThumbnail: true});
    return(
        <div className='Thumbnail'>
            {model}
        </div>
    )
}

export default Thumbnail;