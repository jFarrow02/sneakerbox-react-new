import React from 'react';
import './Copyright.scss';

const Copyright = ()=>{

    const now = new Date(Date.now());
    return(
        <div className='Copyright'>
            <p>Copyright&copy; { now.getUTCFullYear() } 908 Productions Inc. All rights reserved.</p>
        </div>
    );
}

export default Copyright;